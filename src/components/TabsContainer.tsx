
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EDSTab from "./EDSTab";
import CulteTab from "./CulteTab";
import { FileText } from "lucide-react";

const TabsContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState("eds");

  return (
    <Tabs
      defaultValue="eds"
      className="w-full max-w-md mx-auto"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <TabsList className="grid grid-cols-2 w-full mb-4">
        <TabsTrigger value="eds" className="flex items-center justify-center">
          <FileText className="mr-2 h-4 w-4" />
          EDS
        </TabsTrigger>
        <TabsTrigger value="culte" className="flex items-center justify-center">
          <FileText className="mr-2 h-4 w-4" />
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
