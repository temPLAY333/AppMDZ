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
  | "glossary.title";

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

// Traducciones básicas
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
    // Añadir más traducciones según sea necesario
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
    // Añadir más traducciones según sea necesario
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