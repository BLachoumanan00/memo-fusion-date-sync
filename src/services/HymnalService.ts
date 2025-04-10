
import { toast } from "sonner";

export interface Hymn {
  id: number;
  title: string;
  number: number;
  lyrics?: string[];
  category?: string;
}

// Sample data based on https://adventlife.fr/hymnes-et-louanges/
const sampleHymns: Hymn[] = [
  {
    id: 1,
    title: "A Toi La Gloire",
    number: 1,
    category: "Adoration",
    lyrics: [
      "À toi la gloire, Ô Ressuscité ! À toi la victoire pour l'éternité !",
      "Brillant de lumière, l'ange est descendu, Il roule la pierre du tombeau vaincu.",
      "À toi la gloire, Ô Ressuscité ! À toi la victoire pour l'éternité !"
    ]
  },
  {
    id: 2,
    title: "Jésus Est Notre Ami Suprême",
    number: 2,
    category: "Jésus-Christ",
    lyrics: [
      "Jésus est notre Ami suprême : Oh ! quel amour !",
      "Mieux qu'un tendre frère, il nous aime : Oh ! quel amour !",
      "Ici, parents, amis, tout passe ; Seul, Jésus-Christ jamais ne lasse.",
      "Gloire, gloire, gloire à son Nom !"
    ]
  },
  {
    id: 3,
    title: "Tel Que Je Suis",
    number: 3,
    category: "Invitation",
    lyrics: [
      "Tel que je suis, sans rien à moi, Sinon ton sang versé pour moi",
      "Et ta voix qui m'appelle à toi, Agneau de Dieu, je viens, je viens !",
      "Tel que je suis, bien vacillant, En proie au doute à chaque instant,",
      "Lutte au dehors, crainte au dedans, Agneau de Dieu, je viens, je viens !"
    ]
  },
  {
    id: 4,
    title: "J'ai Soif De Ta Présence",
    number: 4,
    category: "Prière",
    lyrics: [
      "J'ai soif de ta présence, Divin chef de ma foi ;",
      "Dans ma faiblesse immense, Que ferais-je sans toi ?",
      "Chaque jour, à chaque heure, Oh ! j'ai besoin de toi ;",
      "Viens, Jésus, et demeure Auprès de moi !"
    ]
  },
  {
    id: 5,
    title: "Ensemble Louons Le Seigneur",
    number: 5,
    category: "Louange",
    lyrics: [
      "Ensemble louons le Seigneur pour sa grandeur infinie.",
      "Par des hymnes de joie glorifions l'Éternel.",
      "Que son amour, que son Esprit unissent tous ses enfants.",
      "Devant son trône prosternons-nous pour l'adorer humblement."
    ]
  }
];

// Search hymns by number, title or lyrics
const searchHymns = async (query: string): Promise<Hymn[]> => {
  try {
    const lowerQuery = query.toLowerCase().trim();
    
    // Check if query is a hymn number
    if (/^\d+$/.test(lowerQuery)) {
      const number = parseInt(lowerQuery, 10);
      const hymn = sampleHymns.find(h => h.number === number);
      return hymn ? [hymn] : [];
    }
    
    // Search by title or lyrics
    return sampleHymns.filter(hymn => 
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
    const hymn = sampleHymns.find(h => h.number === number);
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
    const categories = new Set<string>();
    sampleHymns.forEach(hymn => {
      if (hymn.category) {
        categories.add(hymn.category);
      }
    });
    return Array.from(categories).sort();
  } catch (error) {
    console.error("Error getting categories:", error);
    toast.error("Erreur lors de la récupération des catégories");
    throw error;
  }
};

// Get hymns by category
const getHymnsByCategory = async (category: string): Promise<Hymn[]> => {
  try {
    return sampleHymns.filter(hymn => 
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
  getHymnsByCategory
};

export default HymnalService;
