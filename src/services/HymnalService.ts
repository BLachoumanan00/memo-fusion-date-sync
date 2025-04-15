
import { toast } from "sonner";
import { Hymn } from "@/types/hymnal";
import { allHymns, hymnCategories } from "@/data/hymns";

// Get all hymns
const getAllHymns = async (): Promise<Hymn[]> => {
  try {
    return allHymns;
  } catch (error) {
    console.error("Error getting all hymns:", error);
    toast.error("Erreur lors de la récupération des cantiques");
    throw error;
  }
};

// Search hymns by number, title or lyrics
const searchHymns = async (query: string): Promise<Hymn[]> => {
  try {
    if (!query.trim()) {
      return allHymns;
    }
    
    const lowerQuery = query.toLowerCase().trim();
    
    if (/^\d+$/.test(lowerQuery)) {
      const number = parseInt(lowerQuery, 10);
      const hymn = allHymns.find(h => h.number === number);
      return hymn ? [hymn] : [];
    }
    
    return allHymns.filter(hymn => 
      hymn.title.toLowerCase().includes(lowerQuery) || 
      hymn.lyrics?.some(line => line.toLowerCase().includes(lowerQuery)) ||
      hymn.category?.toLowerCase().includes(lowerQuery)
    );
  } catch (error) {
    console.error("Error searching hymns:", error);
    toast.error("Erreur lors de la recherche d'hymnes");
    throw error;
  }
};

// Get hymn by number
const getHymnByNumber = async (number: number): Promise<Hymn | null> => {
  try {
    const hymn = allHymns.find(h => h.number === number);
    return hymn || null;
  } catch (error) {
    console.error("Error getting hymn:", error);
    toast.error("Erreur lors de la récupération de l'hymne");
    throw error;
  }
};

// Get all categories
const getCategories = async (): Promise<string[]> => {
  try {
    return hymnCategories;
  } catch (error) {
    console.error("Error getting categories:", error);
    toast.error("Erreur lors de la récupération des catégories");
    throw error;
  }
};

// Get hymns by category
const getHymnsByCategory = async (category: string): Promise<Hymn[]> => {
  try {
    if (category === "all") {
      return allHymns;
    }
    
    return allHymns.filter(hymn => 
      hymn.category?.toLowerCase() === category.toLowerCase()
    );
  } catch (error) {
    console.error("Error getting hymns by category:", error);
    toast.error("Erreur lors de la récupération des hymnes par catégorie");
    throw error;
  }
};

export const HymnalService = {
  searchHymns,
  getHymnByNumber,
  getCategories,
  getHymnsByCategory,
  getAllHymns
};

export default HymnalService;
