
import React from 'react';
import DateSelector from '@/components/DateSelector';
import TabsContainer from '@/components/TabsContainer';
import ActionButtons from '@/components/ActionButtons';
import { ChurchProgramProvider } from '@/contexts/ChurchProgramContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Book, Music } from 'lucide-react';
import HymnSelector from '@/components/HymnSelector';
import BibleVerseSelector from '@/components/BibleVerseSelector';
import { BibleVerse } from '@/services/BibleService';
import { Hymn } from '@/services/HymnalService';

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
          <FeatureButtons />
          <TabsContainer />
          <ActionButtons />
        </div>
      </div>
    </ChurchProgramProvider>
  );
};

const FeatureButtons = () => {
  const { updateEDSField, updateCulteField, activeTab, edsData, culteData } = useChurchProgram();
  
  const handleVerseSelect = (verse: BibleVerse) => {
    if (activeTab === "eds") {
      updateEDSField("texteBase", `${verse.reference} - ${verse.text}`);
    } else {
      updateCulteField("texteBase", `${verse.reference} - ${verse.text}`);
    }
  };
  
  const handleHymnSelect = (hymn: Hymn) => {
    if (activeTab === "culte") {
      // Determine which cantique field to update based on what's already filled
      if (!hymn.number) return;
      
      if (!culteData.cantique1) {
        updateCulteField("cantique1", `#${hymn.number} - ${hymn.title}`);
      } else if (!culteData.cantique2) {
        updateCulteField("cantique2", `#${hymn.number} - ${hymn.title}`);
      } else {
        updateCulteField("cantique3", `#${hymn.number} - ${hymn.title}`);
      }
    } else {
      // Determine which cantique field to update based on what's already filled
      if (!hymn.number) return;
      
      if (!edsData.cantique1) {
        updateEDSField("cantique1", `#${hymn.number} - ${hymn.title}`);
      } else {
        updateEDSField("cantique2", `#${hymn.number} - ${hymn.title}`);
      }
    }
  };
  
  return (
    <div className="flex justify-center gap-2 mb-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Book size={18} />
            Verset
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sélectionnez un verset biblique</SheetTitle>
            <SheetDescription>
              Recherchez et sélectionnez un verset pour votre programme.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <BibleVerseSelector onSelect={handleVerseSelect} />
          </div>
        </SheetContent>
      </Sheet>
      
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Music size={18} />
            Cantique
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sélectionnez un cantique</SheetTitle>
            <SheetDescription>
              Recherchez et sélectionnez un cantique pour votre programme.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <HymnSelector onSelect={handleHymnSelect} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

// Make sure to add the useChurchProgram import
import { useChurchProgram } from '@/contexts/ChurchProgramContext';

export default Index;
