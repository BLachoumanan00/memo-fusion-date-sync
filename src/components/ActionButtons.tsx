
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useChurchProgram } from "@/contexts/ChurchProgramContext";
import { Edit, Save, Sun, Moon, Image } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

const ActionButtons: React.FC = () => {
  const { toggleDarkMode, isDarkMode, editMode, toggleEditMode, selectedDate } = useChurchProgram();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [screenshotOpen, setScreenshotOpen] = useState(false);

  const captureScreenshot = async () => {
    setIsCapturing(true);
    try {
      // Close the dialog to capture the app
      setScreenshotOpen(false);
      
      // Small delay to ensure dialog is closed
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const appElement = document.querySelector("#root") as HTMLElement;
      if (!appElement) {
        throw new Error("Application element not found");
      }
      
      const canvas = await html2canvas(appElement, {
        allowTaint: true,
        useCORS: true,
        logging: false,
        scale: 2 // Higher quality
      });
      
      const imageDataUrl = canvas.toDataURL("image/jpeg", 0.9);
      setCapturedImage(imageDataUrl);
      setScreenshotOpen(true);
      
      toast.success("Capture d'écran réussie");
    } catch (error) {
      console.error("Screenshot error:", error);
      toast.error("Erreur lors de la capture d'écran");
    } finally {
      setIsCapturing(false);
    }
  };

  const saveScreenshot = () => {
    if (capturedImage) {
      try {
        const downloadLink = document.createElement("a");
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        downloadLink.href = capturedImage;
        downloadLink.download = `Screenshot-${formattedDate}.jpg`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        toast.success("Capture d'écran enregistrée");
        setCapturedImage(null);
      } catch (error) {
        console.error("Save error:", error);
        toast.error(`Erreur lors de l'enregistrement: ${error}`);
      }
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
      
      <Dialog open={screenshotOpen} onOpenChange={setScreenshotOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full"
            size="icon"
            onClick={() => setScreenshotOpen(true)}
            title="Capture d'écran"
          >
            <Image size={18} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Capture d'écran</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            {!capturedImage ? (
              <Button 
                onClick={captureScreenshot}
                disabled={isCapturing}
              >
                {isCapturing ? "Capture en cours..." : "Prendre une capture d'écran"}
              </Button>
            ) : (
              <>
                <img 
                  src={capturedImage} 
                  alt="Capture d'écran" 
                  className="w-full rounded-lg" 
                />
                <div className="flex gap-2">
                  <Button onClick={() => setCapturedImage(null)}>Reprendre</Button>
                  <Button onClick={saveScreenshot}>Enregistrer</Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ActionButtons;
