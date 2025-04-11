
import React, { createContext, useContext, useState, useEffect } from "react";
import { format } from "date-fns";
import { BibleVerse } from "@/services/BibleService";
import { Hymn } from "@/services/HymnalService";

// EDS fields
export type EDSData = {
  psaume: string;
  cantique1: string;
  priere: string;
  souhaitBienvenue: string;
  bulletinMissionaire: string;
  cinqMinutesSpeciale: string;
  introductionEDS: string;
  dixMinutesMissionnaire: string;
  cantique2: string;
  texteBase: string;
  bibleVerses?: BibleVerse[];
  hymns?: Hymn[];
};

// Culte fields
export type CulteData = {
  presidence: string;
  serviceFidelite: string;
  lecture: string;
  predication: string;
  louange: string;
  cantique1: string;
  texteBase: string;
  cantique2: string;
  cantique3: string;
  bibleVerses?: BibleVerse[];
  hymns?: Hymn[];
};

type ChurchProgramContextType = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  edsData: EDSData;
  updateEDSField: (field: keyof EDSData, value: string) => void;
  culteData: CulteData;
  updateCulteField: (field: keyof CulteData, value: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  formattedDate: string;
  saveChanges: () => void;
  editMode: boolean;
  toggleEditMode: () => void;
  addEDSBibleVerse: (verse: BibleVerse) => void;
  addCulteBibleVerse: (verse: BibleVerse) => void;
  removeEDSBibleVerse: (index: number) => void;
  removeCulteBibleVerse: (index: number) => void;
  addEDSHymn: (hymn: Hymn) => void;
  addCulteHymn: (hymn: Hymn) => void;
  removeEDSHymn: (index: number) => void;
  removeCulteHymn: (index: number) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const defaultEDSData: EDSData = {
  psaume: "",
  cantique1: "",
  priere: "",
  souhaitBienvenue: "",
  bulletinMissionaire: "",
  cinqMinutesSpeciale: "",
  introductionEDS: "",
  dixMinutesMissionnaire: "",
  cantique2: "",
  texteBase: "",
  bibleVerses: [],
  hymns: [],
};

const defaultCulteData: CulteData = {
  presidence: "",
  serviceFidelite: "",
  lecture: "",
  predication: "",
  louange: "",
  cantique1: "",
  texteBase: "",
  cantique2: "",
  cantique3: "",
  bibleVerses: [],
  hymns: [],
};

const ChurchProgramContext = createContext<ChurchProgramContextType | undefined>(
  undefined
);

export const ChurchProgramProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [edsData, setEDSData] = useState<EDSData>(defaultEDSData);
  const [culteData, setCulteData] = useState<CulteData>(defaultCulteData);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("eds");
  const formattedDate = format(selectedDate, "EEEE, dd MMMM yyyy");

  useEffect(() => {
    const savedDateKey = format(selectedDate, "yyyy-MM-dd");
    
    const savedEDSData = localStorage.getItem(`eds-${savedDateKey}`);
    if (savedEDSData) {
      setEDSData(JSON.parse(savedEDSData));
    } else {
      setEDSData(defaultEDSData);
    }
    
    const savedCulteData = localStorage.getItem(`culte-${savedDateKey}`);
    if (savedCulteData) {
      setCulteData(JSON.parse(savedCulteData));
    } else {
      setCulteData(defaultCulteData);
    }
    
    const darkModePref = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkModePref);
    
    if (darkModePref) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Load the active tab preference
    const savedActiveTab = localStorage.getItem("activeTab");
    if (savedActiveTab) {
      setActiveTab(savedActiveTab);
    }
  }, [selectedDate]);

  // Save active tab when it changes
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const updateEDSField = (field: keyof EDSData, value: string) => {
    setEDSData((prev) => ({ ...prev, [field]: value }));
  };

  const updateCulteField = (field: keyof CulteData, value: string) => {
    setCulteData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("darkMode", String(newValue));
      
      if (newValue) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      return newValue;
    });
  };
  
  const saveChanges = () => {
    const dateKey = format(selectedDate, "yyyy-MM-dd");
    localStorage.setItem(`eds-${dateKey}`, JSON.stringify(edsData));
    localStorage.setItem(`culte-${dateKey}`, JSON.stringify(culteData));
  };
  
  const toggleEditMode = () => {
    if (editMode) {
      saveChanges();
    }
    setEditMode(!editMode);
  };
  
  // Bible verse functions
  const addEDSBibleVerse = (verse: BibleVerse) => {
    setEDSData(prev => ({
      ...prev,
      bibleVerses: [...(prev.bibleVerses || []), verse]
    }));
  };
  
  const addCulteBibleVerse = (verse: BibleVerse) => {
    setCulteData(prev => ({
      ...prev,
      bibleVerses: [...(prev.bibleVerses || []), verse]
    }));
  };
  
  const removeEDSBibleVerse = (index: number) => {
    setEDSData(prev => {
      const newVerses = [...(prev.bibleVerses || [])];
      newVerses.splice(index, 1);
      return { ...prev, bibleVerses: newVerses };
    });
  };
  
  const removeCulteBibleVerse = (index: number) => {
    setCulteData(prev => {
      const newVerses = [...(prev.bibleVerses || [])];
      newVerses.splice(index, 1);
      return { ...prev, bibleVerses: newVerses };
    });
  };
  
  // Hymn functions
  const addEDSHymn = (hymn: Hymn) => {
    setEDSData(prev => ({
      ...prev,
      hymns: [...(prev.hymns || []), hymn]
    }));
  };
  
  const addCulteHymn = (hymn: Hymn) => {
    setCulteData(prev => ({
      ...prev,
      hymns: [...(prev.hymns || []), hymn]
    }));
  };
  
  const removeEDSHymn = (index: number) => {
    setEDSData(prev => {
      const newHymns = [...(prev.hymns || [])];
      newHymns.splice(index, 1);
      return { ...prev, hymns: newHymns };
    });
  };
  
  const removeCulteHymn = (index: number) => {
    setCulteData(prev => {
      const newHymns = [...(prev.hymns || [])];
      newHymns.splice(index, 1);
      return { ...prev, hymns: newHymns };
    });
  };

  return (
    <ChurchProgramContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        edsData,
        updateEDSField,
        culteData,
        updateCulteField,
        isDarkMode,
        toggleDarkMode,
        formattedDate,
        saveChanges,
        editMode,
        toggleEditMode,
        addEDSBibleVerse,
        addCulteBibleVerse,
        removeEDSBibleVerse,
        removeCulteBibleVerse,
        addEDSHymn,
        addCulteHymn,
        removeEDSHymn,
        removeCulteHymn,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </ChurchProgramContext.Provider>
  );
};

export const useChurchProgram = () => {
  const context = useContext(ChurchProgramContext);
  if (context === undefined) {
    throw new Error("useChurchProgram must be used within a ChurchProgramProvider");
  }
  return context;
};
