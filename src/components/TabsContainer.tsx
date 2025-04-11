
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EDSTab from "./EDSTab";
import CulteTab from "./CulteTab";
import { Church } from "lucide-react";
import Image from "./Image";
import { useChurchProgram } from "@/contexts/ChurchProgramContext";

const TabsContainer: React.FC = () => {
  const { activeTab, setActiveTab } = useChurchProgram();

  return (
    <Tabs
      defaultValue="eds"
      className="w-full max-w-md mx-auto"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <TabsList className="grid grid-cols-2 w-full mb-4">
        <TabsTrigger 
          value="eds" 
          className="flex items-center justify-center"
        >
          <Image 
            src="/lovable-uploads/7507b8f3-dd6b-4757-beb9-9238247d4584.png" 
            alt="Litugo Icon" 
            className="h-5 w-5 mr-2"
          />
          EDS
        </TabsTrigger>
        <TabsTrigger 
          value="culte" 
          className="flex items-center justify-center"
        >
          <Church className="mr-2 h-4 w-4" />
          Culte
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="eds" id="eds-content">
        <EDSTab />
      </TabsContent>
      
      <TabsContent value="culte" id="culte-content">
        <CulteTab />
      </TabsContent>
    </Tabs>
  );
};

export default TabsContainer;
