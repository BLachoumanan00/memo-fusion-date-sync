
import React from "react";
import { useChurchProgram } from "@/contexts/ChurchProgramContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CulteTab: React.FC = () => {
  const { culteData, updateCulteField, formattedDate, editMode } = useChurchProgram();

  const fields = [
    { label: "Présidence:", key: "presidence" as const },
    { label: "Service de fidélité:", key: "serviceFidelite" as const },
    { label: "Lecture:", key: "lecture" as const },
    { label: "Prédication:", key: "predication" as const },
    { label: "Louange:", key: "louange" as const },
    { label: "Cantique:", key: "cantique1" as const },
    { label: "Texte de base:", key: "texteBase" as const },
    { label: "Cantique:", key: "cantique2" as const },
    { label: "Cantique:", key: "cantique3" as const },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border-2 rounded-lg overflow-hidden shadow-md">
        <div className="bg-church-primary text-white p-2 text-center font-bold flex items-center justify-center">
          <img 
            src="/lovable-uploads/7507b8f3-dd6b-4757-beb9-9238247d4584.png" 
            alt="Litugo Icon" 
            className="h-5 w-5 mr-2"
          />
          CULTE: {formattedDate}
        </div>
        <div className="divide-y">
          {fields.map((field) => (
            <div key={field.key} className="flex p-2">
              <span className="w-1/2 font-semibold">{field.label}</span>
              {editMode ? (
                <Input
                  className="w-1/2 border-none focus-visible:ring-0 p-0 h-auto"
                  value={culteData[field.key] || ""}
                  onChange={(e) => updateCulteField(field.key, e.target.value)}
                  placeholder="Entrer les informations..."
                />
              ) : (
                <span className="w-1/2 overflow-hidden text-ellipsis">
                  {culteData[field.key] || "-"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulteTab;
