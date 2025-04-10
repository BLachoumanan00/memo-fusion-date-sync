
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Music } from "lucide-react";
import { HymnalService, Hymn } from "@/services/HymnalService";
import { toast } from "sonner";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HymnSelectorProps {
  onSelect: (hymn: Hymn) => void;
}

const HymnSelector: React.FC<HymnSelectorProps> = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Hymn[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const cats = await HymnalService.getCategories();
        setCategories(cats);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };
    
    loadCategories();
  }, []);

  const handleSearch = async () => {
    if (!query.trim() && !selectedCategory) {
      toast.error("Veuillez entrer un terme de recherche ou sélectionner une catégorie");
      return;
    }
    
    setIsLoading(true);
    
    try {
      let searchResults: Hymn[] = [];
      
      if (selectedCategory && !query.trim()) {
        // Search by category only
        searchResults = await HymnalService.getHymnsByCategory(selectedCategory);
      } else {
        // Search by query (and potentially filter by category later)
        searchResults = await HymnalService.searchHymns(query);
        
        // Filter by category if one is selected
        if (selectedCategory) {
          searchResults = searchResults.filter(
            hymn => hymn.category?.toLowerCase() === selectedCategory.toLowerCase()
          );
        }
      }
      
      setResults(searchResults);
      
      if (searchResults.length === 0) {
        toast.info("Aucun cantique trouvé");
      }
    } catch (error) {
      console.error("Error searching hymns:", error);
      toast.error("Erreur lors de la recherche de cantiques");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectHymn = (hymn: Hymn) => {
    onSelect(hymn);
    setResults([]);
    setQuery("");
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Music size={18} />
          Sélectionner un cantique
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Numéro ou titre..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
          />
          
          <Select
            value={selectedCategory}
            onValueChange={handleCategoryChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Toutes</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button 
            onClick={handleSearch} 
            disabled={isLoading}
            size="icon"
          >
            <Search size={18} />
          </Button>
        </div>

        {results.length > 0 && (
          <div className="mt-4 space-y-2">
            {results.map(hymn => (
              <div 
                key={hymn.id}
                className="p-3 border rounded-md hover:bg-muted/50 cursor-pointer"
                onClick={() => handleSelectHymn(hymn)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">
                    {hymn.number}. {hymn.title}
                  </span>
                  {hymn.category && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {hymn.category}
                    </span>
                  )}
                </div>
                {hymn.lyrics && hymn.lyrics.length > 0 && (
                  <p className="text-sm mt-1 text-muted-foreground line-clamp-1">
                    {hymn.lyrics[0]}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HymnSelector;
