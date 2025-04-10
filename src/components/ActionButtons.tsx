
import React from "react";
import { Button } from "@/components/ui/button";
import { useChurchProgram } from "@/contexts/ChurchProgramContext";
import { Edit, Save, Sun, Moon, Download } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import html2canvas from "html2canvas";

const ActionButtons: React.FC = () => {
  const { toggleDarkMode, isDarkMode, editMode, toggleEditMode, selectedDate } = useChurchProgram();

  const exportElementAsImage = async (elementId: string, type: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
      });
      
      const dataUrl = canvas.toDataURL("image/jpeg");
      
      const downloadLink = document.createElement("a");
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      downloadLink.href = dataUrl;
      downloadLink.download = `${type}-${formattedDate}.jpg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      toast.success(`${type} exporté avec succès`);
    } catch (error) {
      toast.error(`Erreur lors de l'exportation: ${error}`);
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
        onClick={() => exportElementAsImage("eds-content", "EDS")}
      >
        <Download size={18} className="mr-2" />
        EDS
      </Button>
      
      <Button
        variant="outline"
        className="rounded-full"
        onClick={() => exportElementAsImage("culte-content", "Culte")}
      >
        <Download size={18} className="mr-2" />
        Culte
      </Button>
    </div>
  );
};

export default ActionButtons;
