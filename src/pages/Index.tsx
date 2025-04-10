
import React from 'react';
import DateSelector from '@/components/DateSelector';
import TabsContainer from '@/components/TabsContainer';
import ActionButtons from '@/components/ActionButtons';
import { ChurchProgramProvider } from '@/contexts/ChurchProgramContext';

const Index = () => {
  return (
    <ChurchProgramProvider>
      <div className="min-h-screen bg-background dark:bg-gray-900 text-foreground transition-colors duration-200 pb-8">
        <div className="container max-w-md mx-auto px-4 py-8">
          <DateSelector />
          <TabsContainer />
          <ActionButtons />
        </div>
      </div>
    </ChurchProgramProvider>
  );
};

export default Index;
