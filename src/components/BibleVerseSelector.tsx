
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
import { Search, Book } from "lucide-react";
import { BibleService, BibleVersion, BibleVerse } from "@/services/BibleService";
import { toast } from "sonner";

interface BibleVerseSelectorProps {
  onSelect: (verse: BibleVerse) => void;
}

const BibleVerseSelector: React.FC<BibleVerseSelectorProps> = ({ onSelect }) => {
  const [reference, setReference] = useState("");
  const [version, setVersion] = useState<BibleVersion>("louis-segond");
  const [verseResult, setVerseResult] = useState<BibleVerse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSelectVerse = () => {
    if (verseResult) {
      onSelect(verseResult);
      setVerseResult(null);
      setReference("");
    }
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

        {verseResult && (
          <div className="mt-4 p-4 border rounded-md bg-muted/50">
            <p className="font-semibold">{verseResult.reference}</p>
            <p className="mt-2">{verseResult.text}</p>
            <Button 
              variant="outline" 
              className="mt-2"
              onClick={handleSelectVerse}
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
