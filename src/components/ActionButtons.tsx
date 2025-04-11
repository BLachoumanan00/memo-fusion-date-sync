
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useChurchProgram } from "@/contexts/ChurchProgramContext";
import { Edit, Save, Sun, Moon, Camera } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

const ActionButtons: React.FC = () => {
  const { toggleDarkMode, isDarkMode, editMode, toggleEditMode, selectedDate, activeTab } = useChurchProgram();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [cameraOpen, setCameraOpen] = useState<boolean>(false);

  const openCamera = async () => {
    setCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Camera access error:", error);
      toast.error("Impossible d'accéder à la caméra");
      setCameraOpen(false);
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraOpen(false);
    setCapturedImage(null);
  };

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        // Set canvas dimensions to match video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Draw video frame to canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert canvas to data URL and save
        const imageDataUrl = canvas.toDataURL('image/jpeg');
        setCapturedImage(imageDataUrl);
        
        // Stop camera stream
        if (video.srcObject) {
          const stream = video.srcObject as MediaStream;
          stream.getTracks().forEach(track => track.stop());
          video.srcObject = null;
        }
      }
    }
  };

  const saveImage = () => {
    if (capturedImage) {
      try {
        const downloadLink = document.createElement("a");
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        downloadLink.href = capturedImage;
        downloadLink.download = `Photo-${formattedDate}.jpg`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        toast.success("Photo capturée et enregistrée");
        closeCamera();
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
      
      <Dialog open={cameraOpen} onOpenChange={setCameraOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full"
            size="icon"
            onClick={openCamera}
            title="Prendre une photo"
          >
            <Camera size={18} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Appareil photo</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            {!capturedImage ? (
              <>
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  className="w-full rounded-lg"
                />
                <Button onClick={takePicture}>Prendre une photo</Button>
              </>
            ) : (
              <>
                <img 
                  src={capturedImage} 
                  alt="Captured" 
                  className="w-full rounded-lg" 
                />
                <div className="flex gap-2">
                  <Button onClick={() => setCapturedImage(null)}>Reprendre</Button>
                  <Button onClick={saveImage}>Enregistrer</Button>
                </div>
              </>
            )}
            <canvas ref={canvasRef} className="hidden" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ActionButtons;
