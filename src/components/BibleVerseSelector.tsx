
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Book, ChevronRight, ArrowLeft } from "lucide-react";
import { BibleService, BibleVersion, BibleVerse, bibleBooks } from "@/services/BibleService";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BibleVerseSelectorProps {
  onSelect: (verse: BibleVerse) => void;
}

type NavigationLevel = 'books' | 'chapters' | 'verses';

const BibleVerseSelector: React.FC<BibleVerseSelectorProps> = ({ onSelect }) => {
  const [reference, setReference] = useState("");
  const [version, setVersion] = useState<BibleVersion>("louis-segond");
  const [verseResult, setVerseResult] = useState<BibleVerse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Navigation state
  const [navigationLevel, setNavigationLevel] = useState<NavigationLevel>('books');
  const [selectedBook, setSelectedBook] = useState<{id: string, name: string} | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const handleSearchVerse = async () => {
    if (!reference.trim()) {
      toast.error("Veuillez entrer une référence biblique");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const parsedReference = BibleService.parseReference(reference);
      
      if (!parsedReference) {
        toast.error("Format de référence invalide (ex: Jean 3:16)");
        setIsLoading(false);
        return;
      }
      
      const verse = await BibleService.fetchVerse(parsedReference, version);
      setVerseResult(verse);
    } catch (error) {
      console.error("Error fetching verse:", error);
      toast.error("Erreur lors de la récupération du verset");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectVerse = (verseToSelect: BibleVerse) => {
    onSelect(verseToSelect);
    // Reset the navigation and selection states
    setNavigationLevel('books');
    setSelectedBook(null);
    setSelectedChapter(null);
    setVerseResult(null);
    setReference("");
  };

  const handleBookSelect = (book: {id: string, name: string}) => {
    setSelectedBook(book);
    setNavigationLevel('chapters');
  };

  const handleChapterSelect = (chapter: number) => {
    setSelectedChapter(chapter);
    setNavigationLevel('verses');
  };

  const handleVerseSelect = async (verse: number) => {
    if (!selectedBook || selectedChapter === null) return;
    
    setIsLoading(true);
    
    try {
      const verse = await BibleService.fetchVerse({
        book: selectedBook.name,
        chapter: selectedChapter,
        verse: verse
      }, version);
      
      setVerseResult(verse);
    } catch (error) {
      console.error("Error fetching verse:", error);
      toast.error("Erreur lors de la récupération du verset");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackNavigation = () => {
    if (navigationLevel === 'verses') {
      setNavigationLevel('chapters');
      setSelectedChapter(null);
    } else if (navigationLevel === 'chapters') {
      setNavigationLevel('books');
      setSelectedBook(null);
    }
  };

  const renderBooksList = () => (
    <div className="mt-4">
      <ScrollArea className="h-[300px]">
        <div className="grid grid-cols-1 gap-2">
          {bibleBooks.map((book) => (
            <div 
              key={book.id}
              className="flex justify-between items-center p-2 rounded-md hover:bg-muted cursor-pointer"
              onClick={() => handleBookSelect(book)}
            >
              <span>{book.name}</span>
              <ChevronRight size={16} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );

  const renderChaptersList = () => {
    if (!selectedBook) return null;
    
    const chapters = Array.from({ length: selectedBook.chapters }, (_, i) => i + 1);
    
    return (
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleBackNavigation}
            className="mr-2"
          >
            <ArrowLeft size={16} className="mr-1" />
            Retour
          </Button>
          <h3 className="text-lg font-medium">{selectedBook.name}</h3>
        </div>
        
        <ScrollArea className="h-[300px]">
          <div className="grid grid-cols-3 gap-2">
            {chapters.map((chapter) => (
              <div 
                key={chapter}
                className="flex justify-center items-center p-2 border rounded-md hover:bg-muted cursor-pointer"
                onClick={() => handleChapterSelect(chapter)}
              >
                {chapter}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  };

  const renderVersesList = () => {
    if (!selectedBook || selectedChapter === null) return null;
    
    const verses = BibleService.getVersesForChapter(selectedBook.id, selectedChapter, version);
    
    return (
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleBackNavigation}
            className="mr-2"
          >
            <ArrowLeft size={16} className="mr-1" />
            Retour
          </Button>
          <h3 className="text-lg font-medium">
            {selectedBook.name} {selectedChapter}
          </h3>
        </div>
        
        <ScrollArea className="h-[300px]">
          <div className="grid grid-cols-3 gap-2">
            {verses.map((verse) => (
              <div 
                key={verse}
                className="flex justify-center items-center p-2 border rounded-md hover:bg-muted cursor-pointer"
                onClick={() => handleVerseSelect(verse)}
              >
                {verse}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Book size={18} />
          Sélectionner un verset biblique
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Ex: Jean 3:16"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="flex-1"
          />
          <Select
            value={version}
            onValueChange={(val) => setVersion(val as BibleVersion)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Version" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="louis-segond">Louis Segond</SelectItem>
              <SelectItem value="easy-english">Easy English</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            onClick={handleSearchVerse} 
            disabled={isLoading}
            size="icon"
          >
            <Search size={18} />
          </Button>
        </div>

        {/* Hierarchical Navigation */}
        {navigationLevel === 'books' && renderBooksList()}
        {navigationLevel === 'chapters' && renderChaptersList()}
        {navigationLevel === 'verses' && renderVersesList()}

        {verseResult && (
          <div className="mt-4 p-4 border rounded-md bg-muted/50">
            <p className="font-semibold">{verseResult.reference}</p>
            <p className="mt-2">{verseResult.text}</p>
            <Button 
              variant="outline" 
              className="mt-2"
              onClick={() => handleSelectVerse(verseResult)}
            >
              Sélectionner ce verset
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BibleVerseSelector;
