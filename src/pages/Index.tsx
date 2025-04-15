
import React from 'react';
import DateSelector from '@/components/DateSelector';
import TabsContainer from '@/components/TabsContainer';
import ActionButtons from '@/components/ActionButtons';
import { ChurchProgramProvider } from '@/contexts/ChurchProgramContext';

const Index = () => {
  return (
    <ChurchProgramProvider>
      <div className="min-h-screen bg-background dark:bg-gray-900 text-foreground transition-colors duration-200 pb-8">
        <div className="container max-w-md mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/7507b8f3-dd6b-4757-beb9-9238247d4584.png" 
              alt="Litugo" 
              className="h-8 w-8 mr-2"
            />
            <h1 className="text-2xl font-bold text-center">Litugo</h1>
          </div>
          <DateSelector />
          <TabsContainer />
          <ActionButtons />
        </div>
      </div>
    </ChurchProgramProvider>
  );
};

export default Index;
