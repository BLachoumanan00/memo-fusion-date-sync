
import React from "react";
import { useChurchProgram } from "@/contexts/ChurchProgramContext";
import { Input } from "@/components/ui/input";

const EDSTab: React.FC = () => {
  const { edsData, updateEDSField, formattedDate, editMode } = useChurchProgram();

  const fields = [
    { label: "Psaume:", key: "psaume" as const },
    { label: "Prière:", key: "priere" as const },
    { label: "Souhait de bienvenue:", key: "souhaitBienvenue" as const },
    { label: "Bulletin Missionaire:", key: "bulletinMissionaire" as const },
    { label: "5 Minutes Spéciale:", key: "cinqMinutesSpeciale" as const },
    { label: "Introduction EDS:", key: "introductionEDS" as const },
    { label: "10 Minutes Missionnaire:", key: "dixMinutesMissionnaire" as const },
    { label: "Texte de base:", key: "texteBase" as const },
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
          EDS: {formattedDate}
        </div>
        <div className="divide-y">
          {fields.map((field) => (
            <div key={field.key} className="flex p-2">
              <span className="w-1/2 font-semibold">{field.label}</span>
              {editMode ? (
                <Input
                  className="w-1/2 border-none focus-visible:ring-0 p-0 h-auto"
                  value={edsData[field.key] || ""}
                  onChange={(e) => updateEDSField(field.key, e.target.value)}
                  placeholder="Entrer les informations..."
                />
              ) : (
                <span className="w-1/2 overflow-hidden text-ellipsis">
                  {edsData[field.key] || "-"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EDSTab;
