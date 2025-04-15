
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
    id: 25,
    title: "L'Amour Du Sauveur",
    number: 25,
    category: "Amour de Dieu",
    lyrics: [
      "L'amour du Sauveur me conduit chaque jour",
      "Sa présence éclaire mon chemin",
      "Il guide mes pas, me soutient dans l'épreuve",
      "Sa grâce m'accompagne sans fin"
    ]
  },
  {
    id: 26,
    title: "Christ Est Ma Vie",
    number: 26,
    category: "Vie chrétienne",
    lyrics: [
      "Christ est ma vie, ma force et mon espoir",
      "En lui je trouve mon salut et ma joie",
      "Par son amour, mon âme est restaurée",
      "À jamais je veux lui appartenir"
    ]
  },
  {
    id: 27,
    title: "Seigneur, Je Viens À Toi",
    number: 27,
    category: "Prière",
    lyrics: [
      "Seigneur, je viens à toi, tel que je suis",
      "Avec mes fardeaux, mes peines et mes soucis",
      "Tu es mon refuge, ma force et mon soutien",
      "En toi seul je trouve la paix et le bien"
    ]
  },
  {
    id: 28,
    title: "Chantez À L'Éternel",
    number: 28,
    category: "Louange",
    lyrics: [
      "Chantez à l'Éternel un cantique nouveau",
      "Car il a fait des prodiges merveilleux",
      "Son bras puissant, sa droite invincible",
      "Lui ont donné la victoire, alléluia!"
    ]
  },
  {
    id: 29,
    title: "Dans La Nuit Où Le Seigneur Fut Livré",
    number: 29,
    category: "Communion",
    lyrics: [
      "Dans la nuit où le Seigneur fut livré",
      "Il prit le pain, le rompit et le donna",
      "Prenez, mangez, ceci est mon corps",
      "Offert pour vous, pour le salut du monde"
    ]
  },
  {
    id: 30,
    title: "Source De Vie",
    number: 30,
    category: "Saint-Esprit",
    lyrics: [
      "Source de vie, Esprit divin",
      "Viens transformer mon cœur et mon destin",
      "Que ta puissance en moi opère",
      "Et me rende semblable à mon Père"
    ]
  },
  {
    id: 31,
    title: "Je Me Confie En Toi",
    number: 31,
    category: "Confiance",
    lyrics: [
      "Je me confie en toi, Seigneur de ma vie",
      "Dans les moments de joie comme dans la nuit",
      "Tu es mon rocher, ma forteresse",
      "Et ton amour me remplit d'allégresse"
    ]
  },
  {
    id: 32,
    title: "Majesté",
    number: 32,
    category: "Adoration",
    lyrics: [
      "Majesté, à lui la majesté",
      "À Jésus soit louange, honneur et gloire",
      "Majesté, suprême autorité",
      "Du haut de son trône, il règne en vainqueur"
    ]
  },
  {
    id: 33,
    title: "Fais-Moi Marcher",
    number: 33,
    category: "Consécration",
    lyrics: [
      "Fais-moi marcher dans tes sentiers, Seigneur",
      "Conduis mes pas selon ta volonté",
      "Que ta Parole éclaire mon chemin",
      "Et que ton Esprit dirige mon destin"
    ]
  },
  {
    id: 34,
    title: "Ô Père Éternel",
    number: 34,
    category: "Père",
    lyrics: [
      "Ô Père éternel, je m'incline devant toi",
      "Créateur de l'univers, source de toute vie",
      "Ta sagesse infinie gouverne l'univers",
      "Ton amour sans limite remplit nos cœurs"
    ]
  },
  {
    id: 35,
    title: "Marchons Ensemble",
    number: 35,
    category: "Communion fraternelle",
    lyrics: [
      "Marchons ensemble dans l'unité",
      "Liés par l'amour et la charité",
      "Un seul corps, un seul esprit",
      "En Christ nous sommes tous unis"
    ]
  },
  {
    id: 36,
    title: "Venez Au Sauveur",
    number: 36,
    category: "Invitation",
    lyrics: [
      "Venez au Sauveur qui vous aime",
      "Venez, il a brisé vos fers",
      "Pourquoi rester dans vos problèmes?",
      "Les bras de Dieu vous sont ouverts"
    ]
  },
  {
    id: 37,
    title: "Plus Près De Toi",
    number: 37,
    category: "Consécration",
    lyrics: [
      "Plus près de toi, mon Dieu, plus près de toi",
      "C'est le cri de ma foi: plus près de toi!",
      "Dans le jour où l'épreuve déborde comme un fleuve",
      "Garde-moi près de toi, plus près de toi!"
    ]
  },
  {
    id: 38,
    title: "Béni Soit Le Lien",
    number: 38,
    category: "Communion fraternelle",
    lyrics: [
      "Béni soit le lien qui nous unit en Christ",
      "Le lien d'amour divin qui nourrit notre esprit",
      "La communion des saints au Père et au Fils",
      "Est semblable à celle des cieux"
    ]
  },
  {
    id: 39,
    title: "Près De La Croix",
    number: 39,
    category: "Rédemption",
    lyrics: [
      "Près de la croix, je me tiens par la foi",
      "Contemplant ton amour parfait pour moi",
      "Par ton sang versé, tu m'as racheté",
      "À jamais dans ton royaume je vivrai"
    ]
  },
  {
    id: 40,
    title: "La Puissance De Sa Résurrection",
    number: 40,
    category: "Résurrection",
    lyrics: [
      "La puissance de sa résurrection",
      "Transforme mon être en sa création",
      "De la mort à la vie, du péché à la grâce",
      "En Christ je suis une nouvelle création"
    ]
  },
  {
    id: 41,
    title: "Nous Attendons Le Sauveur",
    number: 41,
    category: "Espérance",
    lyrics: [
      "Nous attendons le Sauveur qui revient",
      "Pour nous prendre avec lui dans les cieux",
      "Soyons prêts, car l'heure est proche",
      "Où nous verrons son glorieux retour"
    ]
  },
  {
    id: 42,
    title: "Sonde-Moi, Ô Dieu",
    number: 42,
    category: "Purification",
    lyrics: [
      "Sonde-moi, ô Dieu, et connais mon cœur",
      "Éprouve-moi, et connais mes pensées",
      "Regarde si je suis sur une voie mauvaise",
      "Et conduis-moi sur la voie de l'éternité"
    ]
  },
  {
    id: 43,
    title: "Entonnons L'Hymne De Victoire",
    number: 43,
    category: "Victoire",
    lyrics: [
      "Entonnons l'hymne de victoire",
      "Car le Seigneur a triomphé",
      "Il a vaincu la mort et la tombe",
      "Son règne est à jamais établi"
    ]
  },
  {
    id: 44,
    title: "La Lumière Du Monde",
    number: 44,
    category: "Jésus-Christ",
    lyrics: [
      "La lumière du monde, c'est Jésus",
      "Qui dissipe les ténèbres autour de nous",
      "Marchons dans sa clarté merveilleuse",
      "Et serons transformés à son image"
    ]
  },
  {
    id: 45,
    title: "Dieu Fidèle",
    number: 45,
    category: "Fidélité divine",
    lyrics: [
      "Dieu fidèle, ton amour demeure",
      "Ta compassion se renouvelle chaque jour",
      "Ton alliance est inébranlable",
      "Ta grâce me suffit à chaque instant"
    ]
  },
  {
    id: 46,
    title: "Fortifie-Toi",
    number: 46,
    category: "Encouragement",
    lyrics: [
      "Fortifie-toi dans le Seigneur",
      "Revêts toutes les armes de Dieu",
      "Pour tenir ferme contre les ruses du diable",
      "Car notre combat n'est pas contre la chair"
    ]
  },
  {
    id: 47,
    title: "Celui Qui Met En Dieu Sa Confiance",
    number: 47,
    category: "Confiance",
    lyrics: [
      "Celui qui met en Dieu sa confiance",
      "Est comme un arbre planté près des eaux",
      "Qui étend ses racines vers le courant",
      "Et ne craint point quand vient la chaleur"
    ]
  },
  {
    id: 48,
    title: "Le Bon Berger",
    number: 48,
    category: "Jésus-Christ",
    lyrics: [
      "Le bon berger donne sa vie pour ses brebis",
      "Il les connaît et elles entendent sa voix",
      "Il les conduit dans de verts pâturages",
      "Et les protège de tout danger"
    ]
  },
  {
    id: 49,
    title: "Sa Grâce Me Suffit",
    number: 49,
    category: "Grâce",
    lyrics: [
      "Sa grâce me suffit dans ma faiblesse",
      "Car sa puissance s'accomplit dans ma détresse",
      "Quand je suis faible, c'est alors que je suis fort",
      "Par la puissance de Christ qui habite en moi"
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
  },
  {
    id: 51,
    title: "La Cité Sainte",
    number: 51,
    category: "Espérance",
    lyrics: [
      "La cité sainte, la nouvelle Jérusalem",
      "Où Dieu demeurera avec son peuple",
      "Où il essuiera toute larme de leurs yeux",
      "Et la mort ne sera plus, alléluia!"
    ]
  },
  {
    id: 52,
    title: "Je Me Réjouis",
    number: 52,
    category: "Joie",
    lyrics: [
      "Je me réjouis dans le Seigneur en tout temps",
      "Mon âme est heureuse de sa délivrance",
      "Par sa main puissante il m'a relevé",
      "Et m'a placé sur un roc inébranlable"
    ]
  },
  {
    id: 53,
    title: "Tout Est Accompli",
    number: 53,
    category: "Rédemption",
    lyrics: [
      "Tout est accompli sur la croix du calvaire",
      "Le prix de notre rédemption a été payé",
      "Le voile du temple s'est déchiré en deux",
      "Donnant accès au trône de la grâce"
    ]
  },
  {
    id: 54,
    title: "À L'Agneau De Dieu",
    number: 54,
    category: "Adoration",
    lyrics: [
      "À l'Agneau de Dieu soit la gloire",
      "À celui qui nous a aimés",
      "Et nous a lavés de nos péchés dans son sang",
      "Et a fait de nous des rois et des sacrificateurs"
    ]
  },
  {
    id: 55,
    title: "Mon Âme Bénis L'Éternel",
    number: 55,
    category: "Louange",
    lyrics: [
      "Mon âme, bénis l'Éternel et n'oublie aucun de ses bienfaits",
      "C'est lui qui pardonne toutes tes iniquités",
      "Qui guérit toutes tes maladies",
      "Et te couronne de bonté et de miséricorde"
    ]
  },
  {
    id: 56,
    title: "Jésus, L'Espérance Des Nations",
    number: 56,
    category: "Mission",
    lyrics: [
      "Jésus, l'espérance des nations",
      "La lumière qui brille dans les ténèbres",
      "Envoyés comme témoins de son amour",
      "Portons l'évangile jusqu'aux extrémités de la terre"
    ]
  },
  {
    id: 57,
    title: "Immense Est Sa Fidélité",
    number: 57,
    category: "Fidélité divine",
    lyrics: [
      "Immense est sa fidélité, sa compassion ne tarit pas",
      "Elles se renouvellent chaque matin",
      "Dans la joie ou dans la peine",
      "Son amour demeure à jamais"
    ]
  },
  {
    id: 58,
    title: "Nous Sommes Le Corps Du Christ",
    number: 58,
    category: "Église",
    lyrics: [
      "Nous sommes le corps du Christ, membres de son Église",
      "Appelés à servir dans l'unité et l'amour",
      "Chacun avec ses dons et ses talents",
      "Pour l'édification du corps tout entier"
    ]
  },
  {
    id: 59,
    title: "Abba, Père",
    number: 59,
    category: "Père",
    lyrics: [
      "Abba, Père, nous t'aimons",
      "Nous élevons ton nom avec puissance",
      "Abba, Père, nous t'adorons",
      "Nous te proclamons Dieu de notre vie"
    ]
  },
  {
    id: 60,
    title: "Merveilleux Est Le Seigneur",
    number: 60,
    category: "Adoration",
    lyrics: [
      "Merveilleux est le Seigneur, grand dans sa majesté",
      "Incomparable dans ses œuvres et sa bonté",
      "Qui est comme lui parmi les dieux?",
      "Saint et redoutable en louanges"
    ]
  },
  {
    id: 61,
    title: "Nous Marchons Par La Foi",
    number: 61,
    category: "Foi",
    lyrics: [
      "Nous marchons par la foi et non par la vue",
      "Confiants en la promesse divine",
      "Sans voir, nous croyons en sa parole",
      "Et demeurons fermes jusqu'à la fin"
    ]
  },
  {
    id: 62,
    title: "Le Pain De Vie",
    number: 62,
    category: "Jésus-Christ",
    lyrics: [
      "Le pain de vie descendu du ciel",
      "Celui qui en mange ne mourra point",
      "Chair et sang donnés pour le salut du monde",
      "En lui nous avons la vie éternelle"
    ]
  },
  {
    id: 63,
    title: "Un Jour Dans Tes Parvis",
    number: 63,
    category: "Adoration",
    lyrics: [
      "Un jour dans tes parvis vaut mieux que mille ailleurs",
      "Heureux ceux qui habitent dans ta maison",
      "Ils peuvent te célébrer encore et encore",
      "Goûter à ta présence et ta douceur"
    ]
  },
  {
    id: 64,
    title: "Garde-Moi Près De La Croix",
    number: 64,
    category: "Rédemption",
    lyrics: [
      "Garde-moi près de la croix, source précieuse",
      "Fontaine de guérison pour mon âme",
      "Là où jaillit le sang qui purifie",
      "Et me rend plus blanc que la neige"
    ]
  },
  {
    id: 65,
    title: "Ô Amour Divin",
    number: 65,
    category: "Amour de Dieu",
    lyrics: [
      "Ô amour divin, plus vaste que l'océan",
      "Plus haut que les cieux, plus profond que l'abîme",
      "Amour qui a donné le Fils unique",
      "Pour que nous ayons la vie par lui"
    ]
  },
  {
    id: 66,
    title: "Chantons La Gloire Du Seigneur",
    number: 66,
    category: "Louange",
    lyrics: [
      "Chantons la gloire du Seigneur avec allégresse",
      "Car il a fait pour nous des choses merveilleuses",
      "Sa droite et son bras saint lui ont donné la victoire",
      "Que toute la terre pousse des cris de joie!"
    ]
  },
  {
    id: 67,
    title: "Toi Qui Es Fidèle",
    number: 67,
    category: "Réconfort",
    lyrics: [
      "Toi qui es fidèle au milieu des épreuves",
      "Ne crains point, car je suis avec toi",
      "Je te fortifie, je viens à ton secours",
      "Je te soutiens de ma main victorieuse"
    ]
  },
  {
    id: 68,
    title: "Dans La Présence Du Seigneur",
    number: 68,
    category: "Présence divine",
    lyrics: [
      "Dans la présence du Seigneur il y a plénitude de joie",
      "À sa droite, des délices éternelles",
      "Là où est son Esprit, là est la liberté",
      "Approchons-nous avec confiance du trône de la grâce"
    ]
  },
  {
    id: 69,
    title: "L'Esprit Et L'Épouse Disent: Viens!",
    number: 69,
    category: "Espérance",
    lyrics: [
      "L'Esprit et l'épouse disent: Viens!",
      "Que celui qui entend dise: Viens!",
      "Que celui qui a soif vienne",
      "Et que celui qui veut prenne de l'eau de la vie gratuitement"
    ]
  },
  {
    id: 70,
    title: "Je Proclamerai Ta Grandeur",
    number: 70,
    category: "Louange",
    lyrics: [
      "Je proclamerai ta grandeur, ô mon Dieu et mon Roi",
      "Je bénirai ton nom à toujours et à perpétuité",
      "Chaque jour je te célébrerai",
      "Et je louerai ton nom éternellement"
    ]
  },
  {
    id: 71,
    title: "Prends Ma Vie",
    number: 71,
    category: "Consécration",
    lyrics: [
      "Prends ma vie, elle est à toi",
      "Mes moments et mes jours, prends-les tous",
      "Que mes mains, mes pieds, ma voix",
      "Soient consacrés à ton service"
    ]
  },
  {
    id: 72,
    title: "Cherchez D'abord Le Royaume",
    number: 72,
    category: "Vie chrétienne",
    lyrics: [
      "Cherchez d'abord le royaume de Dieu et sa justice",
      "Et toutes choses vous seront données en plus",
      "Alléluia, alléluia!",
      "Demandez et vous recevrez, cherchez et vous trouverez"
    ]
  },
  {
    id: 73,
    title: "Il Est Exalté",
    number: 73,
    category: "Exaltation",
    lyrics: [
      "Il est exalté, le Roi est élevé",
      "Et je célèbre sa majesté",
      "Il est exalté, à jamais glorifié",
      "Et je célèbre notre Roi"
    ]
  },
  {
    id: 74,
    title: "Quand La Trompette Retentira",
    number: 74,
    category: "Espérance",
    lyrics: [
      "Quand la trompette retentira dans le ciel",
      "Et que l'aube éternelle se lèvera",
      "Quand les sauvés se rassembleront sur l'autre rive",
      "Je serai là par sa grâce infinie"
    ]
  },
  {
    id: 75,
    title: "Mon Cœur Te Cherche",
    number: 75,
    category: "Recherche de Dieu",
    lyrics: [
      "Mon cœur te cherche, ô Dieu",
      "Mon âme a soif de toi",
      "Dans une terre aride et desséchée",
      "Où il n'y a point d'eau"
    ]
  },
  {
    id: 76,
    title: "L'Adorateur Que Le Père Cherche",
    number: 76,
    category: "Adoration",
    lyrics: [
      "L'adorateur que le Père cherche",
      "Est celui qui l'adore en esprit et en vérité",
      "Car Dieu est Esprit",
      "Et il faut que ceux qui l'adorent, l'adorent ainsi"
    ]
  },
  {
    id: 77,
    title: "La Paix De Dieu",
    number: 77,
    category: "Paix",
    lyrics: [
      "La paix de Dieu qui surpasse toute intelligence",
      "Gardera vos cœurs et vos pensées en Jésus-Christ",
      "Dans le trouble, l'inquiétude ou la détresse",
      "Sa paix demeure comme une ancre pour l'âme"
    ]
  },
  {
    id: 78,
    title: "Tournez Les Yeux Vers Jésus",
    number: 78,
    category: "Jésus-Christ",
    lyrics: [
      "Tournez les yeux vers Jésus",
      "Contemplez son visage merveilleux",
      "Et les choses de la terre pâliront",
      "À la lumière de sa gloire et de sa grâce"
    ]
  },
  {
    id: 79,
    title: "Digne, Digne Est L'agneau",
    number: 79,
    category: "Adoration",
    lyrics: [
      "Digne, digne est l'Agneau qui fut immolé",
      "Digne, digne est l'Agneau de recevoir",
      "La puissance, la richesse, la sagesse, la force",
      "L'honneur, la gloire et la louange!"
    ]
  },
  {
    id: 80,
    title: "Heureux Ceux Qui Craignent L'Éternel",
    number: 80,
    category: "Bénédiction",
    lyrics: [
      "Heureux ceux qui craignent l'Éternel",
      "Qui marchent dans ses voies",
      "Tu jouis alors du travail de tes mains",
      "Tu es heureux, tu prospères"
    ]
  },
  {
    id: 81,
    title: "Fais-Nous Voir Ta Gloire",
    number: 81,
    category: "Prière",
    lyrics: [
      "Fais-nous voir ta gloire, ô Seigneur",
      "Comme Moïse l'a contemplée",
      "Que ta présence nous transforme",
      "De gloire en gloire à ton image"
    ]
  },
  {
    id: 82,
    title: "Les Rachetés De L'Éternel",
    number: 82,
    category: "Rédemption",
    lyrics: [
      "Les rachetés de l'Éternel retourneront",
      "Ils iront à Sion avec chants de triomphe",
      "Une joie éternelle couronnera leur tête",
      "La douleur et les gémissements s'enfuiront"
    ]
  },
  {
    id: 83,
    title: "Je Veux Chanter",
    number: 83,
    category: "Louange",
    lyrics: [
      "Je veux chanter ton amour, Seigneur",
      "Chaque instant de ma vie",
      "Danser pour toi en chantant ma joie",
      "Et glorifier ton nom"
    ]
  },
  {
    id: 84,
    title: "Revêtez L'Armure De Dieu",
    number: 84,
    category: "Combat spirituel",
    lyrics: [
      "Revêtez l'armure de Dieu",
      "Pour pouvoir tenir ferme contre les ruses du diable",
      "Ceignez vos reins de la vérité, revêtez la cuirasse de justice",
      "Prenez le bouclier de la foi et le casque du salut"
    ]
  },
  {
    id: 85,
    title: "Bénissez Le Nom Du Seigneur",
    number: 85,
    category: "Louange",
    lyrics: [
      "Bénissez le nom du Seigneur",
      "Vous tous serviteurs du Seigneur",
      "Qui vous tenez dans la maison de l'Éternel",
      "Pendant les nuits, élevez vos mains vers le sanctuaire"
    ]
  },
  {
    id: 86,
    title: "Qu'ils Sont Beaux Sur Les Montagnes",
    number: 86,
    category: "Mission",
    lyrics: [
      "Qu'ils sont beaux sur les montagnes",
      "Les pieds de celui qui apporte de bonnes nouvelles",
      "Qui publie la paix, qui apporte le salut",
      "Et qui dit à Sion: Ton Dieu règne!"
    ]
  },
  {
    id: 87,
    title: "Voici Le Jour",
    number: 87,
    category: "Joie",
    lyrics: [
      "Voici le jour que l'Éternel a fait",
      "Qu'il soit pour nous un sujet d'allégresse et de joie",
      "Réjouissons-nous et soyons dans l'allégresse",
      "Car ce jour est saint pour notre Seigneur"
    ]
  },
  {
    id: 88,
    title: "Mon Rédempteur Est Vivant",
    number: 88,
    category: "Résurrection",
    lyrics: [
      "Mon Rédempteur est vivant, je sais qu'il vit",
      "Celui qui était mort est maintenant vivant",
      "Il est le premier et le dernier",
      "Il tient les clés de la mort et du séjour des morts"
    ]
  },
  {
    id: 89,
    title: "Je Chanterai Les Bontés De L'Éternel",
    number: 89,
    category: "Louange",
    lyrics: [
      "Je chanterai les bontés de l'Éternel à jamais",
      "De génération en génération, je ferai connaître ta fidélité",
      "Car j'ai dit: Ta bonté dure à toujours",
      "Tu as établi ta fidélité dans les cieux"
    ]
  },
  {
    id: 90,
    title: "Mon Rocher, Ma Forteresse",
    number: 90,
    category: "Protection",
    lyrics: [
      "Mon rocher, ma forteresse, mon libérateur",
      "Mon Dieu, mon bouclier, mon refuge",
      "Quand les eaux m'ont submergé",
      "Tu m'as secouru et m'as mis au large"
    ]
  },
  {
    id: 91,
    title: "Je Lève Mes Yeux Vers Les Montagnes",
    number: 91,
    category: "Confiance",
    lyrics: [
      "Je lève mes yeux vers les montagnes",
      "D'où me viendra le secours?",
      "Mon secours vient de l'Éternel",
      "Qui a fait les cieux et la terre"
    ]
  },
  {
    id: 92,
    title: "Il Est Fidèle",
    number: 92,
    category: "Fidélité divine",
    lyrics: [
      "Il est fidèle, notre Dieu est fidèle",
      "Sa bonté dure à toujours",
      "Il est fidèle, notre Dieu est fidèle",
      "Il garde son alliance pour l'éternité"
    ]
  },
  {
    id: 93,
    title: "Sentinelle, Que Dis-Tu De La Nuit?",
    number: 93,
    category: "Vigilance",
    lyrics: [
      "Sentinelle, que dis-tu de la nuit?",
      "Le matin vient, et la nuit aussi",
      "Si vous voulez vous enquérir, enquérez-vous",
      "Convertissez-vous et venez!"
    ]
  },
  {
    id: 94,
    title: "Le Séjour Des Morts A Été Vaincu",
    number: 94,
    category: "Victoire",
    lyrics: [
      "Le séjour des morts a été vaincu",
      "La mort a été engloutie dans la victoire",
      "Ô mort, où est ta victoire?",
      "Ô mort, où est ton aiguillon?"
    ]
  },
  {
    id: 95,
    title: "L'Éternel Est Mon Partage",
    number: 95,
    category: "Confiance",
    lyrics: [
      "L'Éternel est mon partage et ma coupe",
      "Tu assures mon lot",
      "Un héritage délicieux m'est échu",
      "Une belle possession m'est accordée"
    ]
  },
  {
    id: 96,
    title: "À Celui Qui Nous Aime",
    number: 96,
    category: "Adoration",
    lyrics: [
      "À celui qui nous aime et qui nous a délivrés",
      "À celui qui a fait de nous un royaume de sacrificateurs",
      "À lui soient la gloire et la puissance",
      "Aux siècles des siècles! Amen!"
    ]
  },
  {
    id: 97,
    title: "Gardez-Vous Des Idoles",
    number: 97,
    category: "Avertissement",
    lyrics: [
      "Gardez-vous des idoles, petits enfants",
      "N'aimez point le monde, ni les choses du monde",
      "Car tout ce qui est dans le monde",
      "Est la convoitise de la chair, la convoitise des yeux et l'orgueil de la vie"
    ]
  },
  {
    id: 98,
    title: "Christ En Moi, L'Espérance De La Gloire",
    number: 98,
    category: "Vie chrétienne",
    lyrics: [
      "Christ en moi, l'espérance de la gloire",
      "Mystère caché pendant des siècles",
      "Mais révélé maintenant aux saints",
      "À qui Dieu a voulu faire connaître la richesse de ce mystère"
    ]
  },
  {
    id: 99,
    title: "Acclamons L'Éternel",
    number: 99,
    category: "Louange",
    lyrics: [
      "Acclamons l'Éternel avec des cris de joie",
      "Venez avec allégresse en sa présence",
      "Sachez que l'Éternel est Dieu",
      "C'est lui qui nous a faits, et nous sommes à lui"
    ]
  },
  {
    id: 100,
    title: "Je Suis Le Cep",
    number: 100,
    category: "Jésus-Christ",
    lyrics: [
      "Je suis le cep, vous êtes les sarments",
      "Celui qui demeure en moi et en qui je demeure",
      "Porte beaucoup de fruit",
      "Car sans moi vous ne pouvez rien faire"
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
