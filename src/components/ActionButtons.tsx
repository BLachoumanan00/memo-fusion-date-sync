
import React from "react";
import { Button } from "@/components/ui/button";
import { useChurchProgram } from "@/contexts/ChurchProgramContext";
import { Edit, Save, Sun, Moon, Download } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";

const ActionButtons: React.FC = () => {
  const { toggleDarkMode, isDarkMode, editMode, toggleEditMode, selectedDate, activeTab } = useChurchProgram();

  const exportElement = async (fileFormat: "jpg" | "pdf") => {
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
      
      if (fileFormat === "jpg") {
        const dataUrl = canvas.toDataURL("image/jpeg");
        
        const downloadLink = document.createElement("a");
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        downloadLink.href = dataUrl;
        downloadLink.download = `${activeTab.toUpperCase()}-${formattedDate}.jpg`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } else if (fileFormat === "pdf") {
        // Using jsPDF would be ideal here, but since it's not installed,
        // we'll use a workaround with the canvas
        const dataUrl = canvas.toDataURL("image/jpeg");
        
        // Create a new window for the PDF-like view
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
          toast.error("Pop-up blocked. Please allow pop-ups for PDF export.");
          return;
        }
        
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        printWindow.document.write(`
          <html>
            <head>
              <title>${activeTab.toUpperCase()}-${formattedDate}</title>
              <style>
                body { margin: 0; display: flex; justify-content: center; }
                img { max-width: 100%; height: auto; }
                @media print {
                  body { margin: 0; }
                  img { width: 100%; }
                }
              </style>
            </head>
            <body>
              <img src="${dataUrl}" alt="${activeTab.toUpperCase()}">
              <script>
                setTimeout(() => {
                  window.print();
                }, 500);
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
      
      toast.success(`${activeTab.toUpperCase()} exporté en format ${fileFormat.toUpperCase()}`);
    } catch (error) {
      console.error("Export error:", error);
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
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full"
          >
            <Download size={18} className="mr-2" />
            Exporter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Exporter {activeTab.toUpperCase()}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onClick={() => exportElement("jpg")}>
            Format JPG
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => exportElement("pdf")}>
            Format PDF
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ActionButtons;
