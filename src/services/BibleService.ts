
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

// Mock Bible books
export const bibleBooks = [
  { id: 'genesis', name: 'Genèse', chapters: 50 },
  { id: 'exodus', name: 'Exode', chapters: 40 },
  { id: 'leviticus', name: 'Lévitique', chapters: 27 },
  { id: 'numbers', name: 'Nombres', chapters: 36 },
  { id: 'deuteronomy', name: 'Deutéronome', chapters: 34 },
  { id: 'joshua', name: 'Josué', chapters: 24 },
  { id: 'judges', name: 'Juges', chapters: 21 },
  { id: 'ruth', name: 'Ruth', chapters: 4 },
  { id: 'samuel1', name: '1 Samuel', chapters: 31 },
  { id: 'samuel2', name: '2 Samuel', chapters: 24 },
  { id: 'kings1', name: '1 Rois', chapters: 22 },
  { id: 'kings2', name: '2 Rois', chapters: 25 },
  { id: 'chronicles1', name: '1 Chroniques', chapters: 29 },
  { id: 'chronicles2', name: '2 Chroniques', chapters: 36 },
  { id: 'ezra', name: 'Esdras', chapters: 10 },
  { id: 'nehemiah', name: 'Néhémie', chapters: 13 },
  { id: 'esther', name: 'Esther', chapters: 10 },
  { id: 'job', name: 'Job', chapters: 42 },
  { id: 'psalms', name: 'Psaumes', chapters: 150 },
  { id: 'proverbs', name: 'Proverbes', chapters: 31 },
  { id: 'ecclesiastes', name: 'Ecclésiaste', chapters: 12 },
  { id: 'song', name: 'Cantique des Cantiques', chapters: 8 },
  { id: 'isaiah', name: 'Esaïe', chapters: 66 },
  { id: 'jeremiah', name: 'Jérémie', chapters: 52 },
  { id: 'lamentations', name: 'Lamentations', chapters: 5 },
  { id: 'ezekiel', name: 'Ezéchiel', chapters: 48 },
  { id: 'daniel', name: 'Daniel', chapters: 12 },
  { id: 'hosea', name: 'Osée', chapters: 14 },
  { id: 'joel', name: 'Joël', chapters: 3 },
  { id: 'amos', name: 'Amos', chapters: 9 },
  { id: 'obadiah', name: 'Abdias', chapters: 1 },
  { id: 'jonah', name: 'Jonas', chapters: 4 },
  { id: 'micah', name: 'Michée', chapters: 7 },
  { id: 'nahum', name: 'Nahum', chapters: 3 },
  { id: 'habakkuk', name: 'Habakuk', chapters: 3 },
  { id: 'zephaniah', name: 'Sophonie', chapters: 3 },
  { id: 'haggai', name: 'Aggée', chapters: 2 },
  { id: 'zechariah', name: 'Zacharie', chapters: 14 },
  { id: 'malachi', name: 'Malachie', chapters: 4 },
  { id: 'matthew', name: 'Matthieu', chapters: 28 },
  { id: 'mark', name: 'Marc', chapters: 16 },
  { id: 'luke', name: 'Luc', chapters: 24 },
  { id: 'john', name: 'Jean', chapters: 21 },
  { id: 'acts', name: 'Actes', chapters: 28 },
  { id: 'romans', name: 'Romains', chapters: 16 },
  { id: 'corinthians1', name: '1 Corinthiens', chapters: 16 },
  { id: 'corinthians2', name: '2 Corinthiens', chapters: 13 },
  { id: 'galatians', name: 'Galates', chapters: 6 },
  { id: 'ephesians', name: 'Ephésiens', chapters: 6 },
  { id: 'philippians', name: 'Philippiens', chapters: 4 },
  { id: 'colossians', name: 'Colossiens', chapters: 4 },
  { id: 'thessalonians1', name: '1 Thessaloniciens', chapters: 5 },
  { id: 'thessalonians2', name: '2 Thessaloniciens', chapters: 3 },
  { id: 'timothy1', name: '1 Timothée', chapters: 6 },
  { id: 'timothy2', name: '2 Timothée', chapters: 4 },
  { id: 'titus', name: 'Tite', chapters: 3 },
  { id: 'philemon', name: 'Philémon', chapters: 1 },
  { id: 'hebrews', name: 'Hébreux', chapters: 13 },
  { id: 'james', name: 'Jacques', chapters: 5 },
  { id: 'peter1', name: '1 Pierre', chapters: 5 },
  { id: 'peter2', name: '2 Pierre', chapters: 3 },
  { id: 'john1', name: '1 Jean', chapters: 5 },
  { id: 'john2', name: '2 Jean', chapters: 1 },
  { id: 'john3', name: '3 Jean', chapters: 1 },
  { id: 'jude', name: 'Jude', chapters: 1 },
  { id: 'revelation', name: 'Apocalypse', chapters: 22 }
];

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

// Generate verses for a chapter
export const getVersesForChapter = (book: string, chapter: number, version: BibleVersion): number[] => {
  // In a real app, this would come from an API based on the book and chapter
  // For now, we'll return a mock list based on common verse counts
  const commonBooksWithManyVerses = ['psaumes', 'esaie', 'jeremiah'];
  const isCommonLargeBook = commonBooksWithManyVerses.includes(book.toLowerCase());
  
  if (isCommonLargeBook) {
    return Array.from({ length: 30 }, (_, i) => i + 1); // 30 verses
  } else if (chapter === 1) {
    return Array.from({ length: 25 }, (_, i) => i + 1); // 25 verses for chapter 1
  } else if (chapter === 2) {
    return Array.from({ length: 20 }, (_, i) => i + 1); // 20 verses for chapter 2
  } else {
    return Array.from({ length: 15 }, (_, i) => i + 1); // 15 verses for other chapters
  }
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
  getVersesForChapter,
  bibleBooks,
};

export default BibleService;
