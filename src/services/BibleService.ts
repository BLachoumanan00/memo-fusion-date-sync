
import { toast } from "sonner";

export type BibleVersion = 'louis-segond' | 'easy-english';

export type BibleReference = {
  book: string;
  chapter: number;
  verse?: number | null;
  endVerse?: number | null;
};

export interface BibleVerse {
  reference: string;
  text: string;
  version: BibleVersion;
}

// Mock data for Louis Segond Bible (French)
const louisSegondSamples: Record<string, string> = {
  "jean-3-16": "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",
  "psaumes-23-1": "L'Éternel est mon berger: je ne manquerai de rien.",
  "matthieu-5-3": "Heureux les pauvres en esprit, car le royaume des cieux est à eux!",
  // Add more verses as needed
};

// Mock data for Easy English Bible
const easyEnglishSamples: Record<string, string> = {
  "john-3-16": "God loved the world so much that he gave his only Son. God gave his Son so that whoever believes in him may not be lost, but have eternal life.",
  "psalm-23-1": "The Lord is my shepherd. He gives me everything that I need.",
  "matthew-5-3": "Happy are those who know that they need God. The kingdom of heaven belongs to them.",
  // Add more verses as needed
};

// This would be replaced with an actual API call in a production app
const fetchBibleVerse = async (
  reference: BibleReference,
  version: BibleVersion
): Promise<BibleVerse> => {
  try {
    // In a real app, this would make an API call to a Bible API
    // For now, we'll use mock data
    const { book, chapter, verse, endVerse } = reference;
    
    // Normalize reference for lookup
    const normalizedBook = version === 'louis-segond' 
      ? book.toLowerCase().replace(/\s+/g, '-') 
      : book.toLowerCase().replace(/\s+/g, '-').replace(/é|è|ê/g, 'e');
    
    const key = `${normalizedBook}-${chapter}-${verse || 1}`;
    
    let text = '';
    if (version === 'louis-segond') {
      text = louisSegondSamples[key] || "Verset non trouvé. Cette démo contient un nombre limité de versets.";
    } else {
      text = easyEnglishSamples[key] || "Verse not found. This demo contains a limited number of verses.";
    }
    
    const formattedReference = `${book} ${chapter}:${verse || ''}${endVerse ? `-${endVerse}` : ''}`;
    
    return {
      reference: formattedReference,
      text,
      version,
    };
  } catch (error) {
    console.error("Error fetching Bible verse:", error);
    toast.error("Impossible de récupérer le verset biblique");
    throw error;
  }
};

// Function to search Bible by keyword
const searchBible = async (
  keyword: string,
  version: BibleVersion
): Promise<BibleVerse[]> => {
  try {
    // In a real app, this would search an API or database
    // For demo purposes, we'll just look through our sample verses
    const sampleVerses = version === 'louis-segond' ? louisSegondSamples : easyEnglishSamples;
    
    const results: BibleVerse[] = [];
    
    Object.entries(sampleVerses).forEach(([reference, text]) => {
      if (text.toLowerCase().includes(keyword.toLowerCase())) {
        const [book, chapter, verse] = reference.split('-');
        
        // Format the reference nicely
        let formattedBook = book;
        if (version === 'louis-segond') {
          // Capitalize first letter
          formattedBook = book.charAt(0).toUpperCase() + book.slice(1).replace(/-/g, ' ');
        } else {
          // For English, capitalize each word
          formattedBook = book.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');
        }
        
        results.push({
          reference: `${formattedBook} ${chapter}:${verse}`,
          text,
          version,
        });
      }
    });
    
    return results;
  } catch (error) {
    console.error("Error searching Bible:", error);
    toast.error("Erreur lors de la recherche dans la Bible");
    throw error;
  }
};

// Parse a string reference (e.g., "Jean 3:16") into a structured reference object
const parseBibleReference = (referenceStr: string): BibleReference | null => {
  try {
    // Match patterns like "Jean 3:16" or "Jean 3:16-18"
    const regex = /^(.+?)\s+(\d+)(?::(\d+)(?:-(\d+))?)?$/;
    const match = referenceStr.match(regex);
    
    if (!match) return null;
    
    const [, book, chapter, verse, endVerse] = match;
    
    return {
      book: book.trim(),
      chapter: parseInt(chapter, 10),
      verse: verse ? parseInt(verse, 10) : null,
      endVerse: endVerse ? parseInt(endVerse, 10) : null,
    };
  } catch (error) {
    console.error("Error parsing Bible reference:", error);
    return null;
  }
};

export const BibleService = {
  fetchVerse: fetchBibleVerse,
  search: searchBible,
  parseReference: parseBibleReference,
};

export default BibleService;
