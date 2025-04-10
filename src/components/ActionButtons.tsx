
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
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const ActionButtons: React.FC = () => {
  const { toggleDarkMode, isDarkMode, editMode, toggleEditMode, selectedDate } = useChurchProgram();

  const exportElement = async (elementId: string, type: string, fileFormat: "jpg" | "pdf") => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
      });
      
      if (fileFormat === "jpg") {
        const dataUrl = canvas.toDataURL("image/jpeg");
        
        const downloadLink = document.createElement("a");
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        downloadLink.href = dataUrl;
        downloadLink.download = `${type}-${formattedDate}.jpg`;
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
              <title>${type}-${formattedDate}</title>
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
              <img src="${dataUrl}" alt="${type}">
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
      
      toast.success(`${type} exporté en format ${fileFormat.toUpperCase()}`);
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
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full"
          >
            <Download size={18} className="mr-2" />
            EDS
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => exportElement("eds-content", "EDS", "jpg")}>
            Format JPG
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => exportElement("eds-content", "EDS", "pdf")}>
            Format PDF
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full"
          >
            <Download size={18} className="mr-2" />
            Culte
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => exportElement("culte-content", "Culte", "jpg")}>
            Format JPG
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => exportElement("culte-content", "Culte", "pdf")}>
            Format PDF
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ActionButtons;
