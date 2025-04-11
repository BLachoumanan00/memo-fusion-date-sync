
import React from "react";
import { Button } from "@/components/ui/button";
import { useChurchProgram } from "@/contexts/ChurchProgramContext";
import { Edit, Save, Sun, Moon, Camera } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import html2canvas from "html2canvas";

const ActionButtons: React.FC = () => {
  const { toggleDarkMode, isDarkMode, editMode, toggleEditMode, selectedDate, activeTab } = useChurchProgram();

  const takeScreenshot = async () => {
    // Safeguard against undefined activeTab
    if (!activeTab) {
      toast.error("Unable to determine which tab to export");
      return;
    }
    
    // Determine which element to export based on the active tab
    const elementId = activeTab === "eds" ? "eds-content" : "culte-content";
    const element = document.getElementById(elementId);
    
    if (!element) {
      toast.error(`Élément ${activeTab.toUpperCase()} introuvable`);
      return;
    }

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
      });
      
      const dataUrl = canvas.toDataURL("image/jpeg");
      
      const downloadLink = document.createElement("a");
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      downloadLink.href = dataUrl;
      downloadLink.download = `${activeTab.toUpperCase()}-${formattedDate}.jpg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      toast.success(`${activeTab.toUpperCase()} capturé en JPG`);
    } catch (error) {
      console.error("Screenshot error:", error);
      toast.error(`Erreur lors de la capture: ${error}`);
    }
  };

  return (
    <div className="flex justify-center gap-2 p-4 w-full max-w-md mx-auto">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </Button>
      
      <Button
        variant={editMode ? "default" : "outline"}
        className={`rounded-full ${editMode ? "bg-church-primary hover:bg-church-primary/90" : ""}`}
        onClick={toggleEditMode}
      >
        {editMode ? <Save size={18} className="mr-2" /> : <Edit size={18} className="mr-2" />}
        {editMode ? "Enregistrer" : "Modifier"}
      </Button>
      
      <Button
        variant="outline"
        className="rounded-full"
        size="icon"
        onClick={takeScreenshot}
        title="Capture écran"
      >
        <Camera size={18} />
      </Button>
    </div>
  );
};

export default ActionButtons;
