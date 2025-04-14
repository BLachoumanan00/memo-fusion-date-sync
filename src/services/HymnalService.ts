import { toast } from "sonner";

export interface Hymn {
  id: number;
  title: string;
  number: number;
  lyrics?: string[];
  category?: string;
}

// Expanded sample hymns list
const sampleHymns: Hymn[] = [
  {
    id: 1,
    title: "A Toi La Gloire",
    number: 1,
    category: "Résurrection",
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
  },
  {
    id: 6,
    title: "Je Louerai L'Éternel",
    number: 6,
    category: "Louange",
    lyrics: [
      "Je louerai l'Éternel de tout mon cœur,",
      "Je raconterai toutes tes merveilles,",
      "Je chanterai ton nom.",
      "Je louerai l'Éternel de tout mon cœur,",
      "Je ferai de toi le sujet de ma joie,",
      "Alléluia!"
    ]
  },
  {
    id: 7,
    title: "Dieu Tout-Puissant",
    number: 7,
    category: "Adoration",
    lyrics: [
      "Dieu tout-puissant, quand mon cœur considère",
      "Tout l'univers créé par ton pouvoir :",
      "Le ciel d'azur, les éclairs, le tonnerre,",
      "Le clair matin ou les ombres du soir.",
      "De tout mon être alors s'élève un chant :",
      "Dieu tout-puissant, que tu es grand !"
    ]
  },
  {
    id: 8,
    title: "Attaché À La Croix Pour Moi",
    number: 8,
    category: "Rédemption",
    lyrics: [
      "Attaché à la croix pour moi,",
      "Attaché à la croix pour moi,",
      "Il a pris mon péché, il m'a délivré,",
      "Attaché à la croix pour moi."
    ]
  },
  {
    id: 9,
    title: "Jésus Nous Sommes À Genoux",
    number: 9,
    category: "Prière",
    lyrics: [
      "Jésus, nous sommes à genoux,",
      "Pour t'adorer, ô divin Maître !",
      "Nous sommes à genoux,",
      "Toi, tu vois au fond de notre être.",
      "Nous t'adorons à genoux."
    ]
  },
  {
    id: 10,
    title: "Debout, Sainte Cohorte",
    number: 10,
    category: "Combat",
    lyrics: [
      "Debout, sainte cohorte,",
      "Soldats du Roi des rois !",
      "Tenez d'une main forte",
      "L'étendard de la croix !",
      "Au sentier de la gloire",
      "Jésus-Christ nous conduit,",
      "De victoire en victoire",
      "Il mène qui le suit."
    ]
  },
  {
    id: 11,
    title: "Le Seigneur Est Ma Lumière",
    number: 11,
    category: "Confiance",
    lyrics: [
      "Le Seigneur est ma lumière et mon salut,",
      "De qui aurais-je crainte ?",
      "Le Seigneur est le soutien de ma vie,",
      "De qui aurais-je peur ?"
    ]
  },
  {
    id: 12,
    title: "Jésus Tu Es Le Roi Des Rois",
    number: 12,
    category: "Adoration",
    lyrics: [
      "Jésus, tu es le Roi des rois,",
      "Le Seigneur des seigneurs.",
      "Tu règnes sur toute la terre,",
      "Tu es le Roi des rois."
    ]
  },
  {
    id: 13,
    title: "Quand Je Contemple Cette Croix",
    number: 13,
    category: "Rédemption",
    lyrics: [
      "Quand je contemple cette croix",
      "Où tu mourus, Prince de gloire,",
      "Je compte comme perte et sable",
      "Les trésors qui m'ont séduit."
    ]
  },
  {
    id: 14,
    title: "Qu'il Fait Bon À Ton Service",
    number: 14,
    category: "Service",
    lyrics: [
      "Qu'il fait bon à ton service, Jésus, mon Sauveur !",
      "Qu'il est doux le sacrifice que t'offre mon cœur !",
      "Prends, ô Jésus, prends ma vie, elle est toute à toi.",
      "Et dans ta grâce infinie, dispose de moi."
    ]
  },
  {
    id: 15,
    title: "Vers Toi Monte Notre Hommage",
    number: 15,
    category: "Adoration",
    lyrics: [
      "Vers toi monte notre hommage,",
      "Fils de Dieu, puissant Sauveur,",
      "Qui demeures d'âge en âge,",
      "Le refuge du pécheur."
    ]
  },
  {
    id: 16,
    title: "Oui, Je Te Bénirai",
    number: 16,
    category: "Louange",
    lyrics: [
      "Oui, je te bénirai, j'exalterai ton nom,",
      "Je m'inclinerai devant toi.",
      "Oui, je veux t'adorer, te donner tout mon cœur,",
      "Car tu es mon Dieu, mon Sauveur."
    ]
  },
  {
    id: 17,
    title: "Gloire À Toi",
    number: 17,
    category: "Louange",
    lyrics: [
      "Gloire à toi, gloire à toi,",
      "Agneau de Dieu, je chante pour toi.",
      "Gloire à toi, gloire à toi,",
      "Ton nom est glorieux."
    ]
  },
  {
    id: 18,
    title: "Ô Sainte Ardeur",
    number: 18,
    category: "Service",
    lyrics: [
      "Ô sainte ardeur, ô joie ineffable,",
      "Au cœur qui t'aime, au cœur qui te sert.",
      "Travailler, souffrir, combattre pour toi,",
      "C'est mon bonheur, mon doux Sauveur."
    ]
  },
  {
    id: 19,
    title: "La Voix Du Seigneur M'appelle",
    number: 19,
    category: "Appel",
    lyrics: [
      "La voix du Seigneur m'appelle :",
      "Prends ta croix et viens, suis-moi.",
      "Je réponds : Sauveur fidèle,",
      "Me voici, je suis à toi."
    ]
  },
  {
    id: 20,
    title: "Que Serait Ma Vie",
    number: 20,
    category: "Confiance",
    lyrics: [
      "Que serait ma vie sans toi, Seigneur ?",
      "Une vie vouée au néant.",
      "Sans espoir et sans lendemain,",
      "Sans refuge, sans chemin."
    ]
  },
  {
    id: 21,
    title: "Mon Berger Est Le Seigneur",
    number: 21,
    category: "Confiance",
    lyrics: [
      "Mon berger est le Seigneur, je ne manquerai de rien",
      "Il me fait reposer dans de verts pâturages",
      "Il me guide près des eaux tranquilles",
      "Il restaure mon âme"
    ]
  },
  {
    id: 22,
    title: "Dieu Est Amour",
    number: 22,
    category: "Amour de Dieu",
    lyrics: [
      "Dieu est amour, Dieu est bonté",
      "Son cœur déborde de tendresse",
      "Il nous conduit par sa sagesse",
      "Et nous protège avec fierté"
    ]
  },
  {
    id: 23,
    title: "Je Crois En Toi Seigneur",
    number: 23,
    category: "Foi",
    lyrics: [
      "Je crois en toi Seigneur, malgré les tempêtes",
      "Ta grâce est ma force, ton amour ma paix",
      "Dans les moments sombres, tu es ma lumière",
      "Mon refuge et ma forteresse"
    ]
  },
  {
    id: 24,
    title: "Grande Est Ta Fidélité",
    number: 24,
    category: "Louange",
    lyrics: [
      "Grande est ta fidélité, ô Dieu mon Père",
      "Chaque matin, ta grâce renouvelle",
      "Ta compassion ne connaît pas de limites",
      "Ta fidélité est plus grande que mes épreuves"
    ]
  },
  {
    id: 50,
    title: "Viens, Saint-Esprit",
    number: 50,
    category: "Saint-Esprit",
    lyrics: [
      "Viens, Saint-Esprit, descends sur nous",
      "Remplis nos cœurs de ton amour",
      "Transforme-nous par ta puissance",
      "Guide nos pas dans ton alliance"
    ]
  }
];

// Get all hymns
const getAllHymns = async (): Promise<Hymn[]> => {
  try {
    // In a real app, this would fetch from an API or database
    return sampleHymns;
  } catch (error) {
    console.error("Error getting all hymns:", error);
    toast.error("Erreur lors de la récupération des cantiques");
    throw error;
  }
};

// Search hymns by number, title or lyrics
const searchHymns = async (query: string): Promise<Hymn[]> => {
  try {
    // If query is empty, return all hymns
    if (!query.trim()) {
      return sampleHymns;
    }
    
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
    // If category is "all", return all hymns
    if (category === "all") {
      return sampleHymns;
    }
    
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
  getHymnsByCategory,
  getAllHymns
};

export default HymnalService;
