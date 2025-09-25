import React, { createContext, useState, ReactNode } from 'react';

type LanguageKey = 'es' | 'en';

type TranslationKey = 
  | "home.title" 
  | "plaza.title" 
  | "plant.title" 
  | "language.title" 
  | "model.title" 
  | "map.title" 
  | "info.title" 
  | "references.title" 
  | "glossary.title"
  | "main.menu"
  | "mendoza.squares"
  | "start.tour"
  | "play.trivia"
  | "additional.info"
  | "reference"
  | "adaptation"
  | "leaf.types"
  | "leaf.arrangement"
  | "flower.arrangement"
  | "fruit.types"
  | "naturalized"
  | "economic.use"
  | "drought.resistant"
  | "exotic"
  | "cold.resistant"
  | "salt.resistant"
  | "plaza.san.martin"
  | "plaza.independencia"
  | "plaza.espana"
  | "plaza.italia"
  | "plaza.chile"
  | "stop.title"
  | "flora.title"
  | "button.map"
  | "button.model";

type TranslationsType = {
  [key in LanguageKey]: {
    [key in TranslationKey]: string;
  };
};

type LanguageContextType = {
  language: LanguageKey;
  setLanguage: (lang: LanguageKey) => void;
  translate: (key: TranslationKey) => string;
};

// Traducciones completas para la aplicación
const translations: TranslationsType = {
  es: {
    "home.title": "Inicio",
    "plaza.title": "Plaza",
    "plant.title": "Planta",
    "language.title": "Idioma",
    "model.title": "Modelo 3D",
    "map.title": "Mapa",
    "info.title": "Información Adicional",
    "references.title": "Referencias",
    "glossary.title": "Glosario",
    "main.menu": "Menú Principal",
    "mendoza.squares": "Plazas de Mendoza",
    "start.tour": "Iniciar Recorrido",
    "play.trivia": "Jugar Trivia",
    "additional.info": "Información Adicional",
    "reference": "Referencia",
    "adaptation": "Adaptaciones",
    "leaf.types": "Tipos de Hojas",
    "leaf.arrangement": "Disposición de las Hojas",
    "flower.arrangement": "Disposición de Flores",
    "fruit.types": "Tipos de Fruto",
    "naturalized": "Naturalizada",
    "economic.use": "Uso Económico",
    "drought.resistant": "Resistente a sequía",
    "exotic": "Exótica",
    "cold.resistant": "Resistente al frío",
    "salt.resistant": "Resistente a suelo salino",
    "plaza.san.martin": "Plaza San Martín",
    "plaza.independencia": "Plaza Independencia",
    "plaza.espana": "Plaza España",
    "plaza.italia": "Plaza Italia",
    "plaza.chile": "Plaza Chile",
    "stop.title": "Parada",
    "flora.title": "Flora de la Parada",
    "button.map": "Mapa",
    "button.model": "Modelo"
  },
  en: {
    "home.title": "Home",
    "plaza.title": "Square",
    "plant.title": "Plant",
    "language.title": "Language",
    "model.title": "3D Model",
    "map.title": "Map",
    "info.title": "Additional Information",
    "references.title": "References",
    "glossary.title": "Glossary",
    "main.menu": "Main Menu",
    "mendoza.squares": "Mendoza Squares",
    "start.tour": "Start Tour",
    "play.trivia": "Play Trivia",
    "additional.info": "Additional Information",
    "reference": "Reference",
    "adaptation": "Adaptations",
    "leaf.types": "Leaf Types",
    "leaf.arrangement": "Leaf Arrangement",
    "flower.arrangement": "Flower Arrangement",
    "fruit.types": "Fruit Types",
    "naturalized": "Naturalized",
    "economic.use": "Economic Use",
    "drought.resistant": "Drought Resistant",
    "exotic": "Exotic",
    "cold.resistant": "Cold Resistant",
    "salt.resistant": "Salt Resistant Soil",
    "plaza.san.martin": "San Martin Square",
    "plaza.independencia": "Independence Square",
    "plaza.espana": "Spain Square",
    "plaza.italia": "Italy Square",
    "plaza.chile": "Chile Square",
    "stop.title": "Stop",
    "flora.title": "Flora at Stop",
    "button.map": "Map",
    "button.model": "Model"
  }
};

// Valor por defecto
const defaultContextValue: LanguageContextType = {
  language: 'es',
  setLanguage: () => {},
  translate: (key: string) => key,
};

export const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

// Hook personalizado para usar el contexto de idioma
export const useLanguage = () => {
  return React.useContext(LanguageContext);
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<LanguageKey>('es');

  // Función para traducir textos según el idioma seleccionado
  const translate = (key: TranslationKey): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};