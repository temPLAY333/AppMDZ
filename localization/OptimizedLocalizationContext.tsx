/**
 * OPTIMIZED LOCALIZATION CONTEXT
 * Context con useMemo, bundle splitting y mejor performance
 */

import React, { createContext, useState, useEffect, useMemo, useCallback, ReactNode } from 'react';
import { 
  SupportedLanguage, 
  TranslationKey, 
  DEFAULT_LANGUAGE, 
  AVAILABLE_LANGUAGES 
} from './types';
import { localizationManager } from './LocalizationManager';

// Tipo del contexto optimizado
interface OptimizedLocalizationContextType {
  // Estado actual
  language: SupportedLanguage;
  isLoading: boolean;
  
  // Acciones
  setLanguage: (language: SupportedLanguage) => Promise<void>;
  translate: (key: TranslationKey, fallback?: string) => string;
  
  // Utilidades
  getAvailableLanguages: () => Array<{ code: SupportedLanguage; name: string; nativeName: string; flag: string }>;
  isLanguageSupported: (language: string) => boolean;
}

// Valor por defecto del contexto
const defaultContextValue: OptimizedLocalizationContextType = {
  language: DEFAULT_LANGUAGE,
  isLoading: false,
  setLanguage: async () => {},
  translate: (key: string) => key,
  getAvailableLanguages: () => [],
  isLanguageSupported: () => false,
};

export const OptimizedLocalizationContext = createContext<OptimizedLocalizationContextType>(defaultContextValue);

// Props del provider
interface OptimizedLocalizationProviderProps {
  children: ReactNode;
  initialLanguage?: SupportedLanguage;
}

export const OptimizedLocalizationProvider: React.FC<OptimizedLocalizationProviderProps> = ({
  children,
  initialLanguage = DEFAULT_LANGUAGE
}) => {
  // Forzamos español como idioma inicial siempre
  const [language, setLanguageState] = useState<SupportedLanguage>(DEFAULT_LANGUAGE);
  const [isLoading, setIsLoading] = useState(false);

  // Función memoizada para cambiar idioma con bundle splitting
  const setLanguage = useCallback(async (newLanguage: SupportedLanguage) => {
    console.log(`CONTEXT setLanguage called with: ${newLanguage}, current: ${language}`);
    if (newLanguage === language) {
      console.log(`CONTEXT setLanguage: Same language, skipping`);
      return;
    }
    
    setIsLoading(true);
    try {
      await localizationManager.loadLanguage(newLanguage);
      setLanguageState(newLanguage);
    } catch (error) {
      console.error('Failed to change language:', error);
      // No cambiar el estado si falla la carga
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  // Función de traducción memoizada para máxima performance
  const translate = useMemo(() => {
    return (key: TranslationKey, fallback?: string): string => {
      return localizationManager.translate(key, fallback);
    };
  }, [language]); // Re-crear solo cuando cambie el idioma

  // Funciones de utilidad memoizadas
  const getAvailableLanguages = useMemo(() => {
    return localizationManager.getAvailableLanguages.bind(localizationManager);
  }, []);

  const isLanguageSupported = useMemo(() => {
    return localizationManager.isLanguageSupported.bind(localizationManager);
  }, []);

  // Cargar idioma inicial al montar
  useEffect(() => {
    const loadInitialLanguage = async () => {
      console.log('LOADING INITIAL LANGUAGE:', DEFAULT_LANGUAGE);
      setIsLoading(true);
      try {
        // Forzamos cargar español siempre al inicio
        await localizationManager.loadLanguage(DEFAULT_LANGUAGE);
        setLanguageState(DEFAULT_LANGUAGE);
        console.log('INITIAL LANGUAGE LOADED SUCCESSFULLY');
        console.log('Manager current language after load:', localizationManager.getCurrentLanguage());
        
        // Pre-cargar idiomas comunes en background para mejor UX
        localizationManager.preloadCommonLanguages().catch(err => {
          console.warn('Failed to preload languages:', err);
        });
      } catch (error) {
        console.error('FAILED TO LOAD INITIAL LANGUAGE:', error);
      } finally {
        setIsLoading(false);
        console.log('LOADING COMPLETED, isLoading now false');
      }
    };

    loadInitialLanguage();
  }, []); // Removemos la dependencia para que solo cargue una vez

  // Valor del contexto memoizado para evitar re-renders innecesarios
  const contextValue = useMemo(() => ({
    language,
    isLoading,
    setLanguage,
    translate,
    getAvailableLanguages,
    isLanguageSupported,
  }), [language, isLoading, setLanguage, translate, getAvailableLanguages, isLanguageSupported]);

  return (
    <OptimizedLocalizationContext.Provider value={contextValue}>
      {children}
    </OptimizedLocalizationContext.Provider>
  );
};

// Hook personalizado optimizado
export const useOptimizedLocalization = () => {
  const context = React.useContext(OptimizedLocalizationContext);
  
  if (!context) {
    throw new Error('useOptimizedLocalization must be used within OptimizedLocalizationProvider');
  }
  
  return context;
};

// Hook para traducciones con memoización adicional
export const useTranslation = () => {
  const { translate, language } = useOptimizedLocalization();
  
  // Función memoizada que recuerda traducciones por clave
  const memoizedTranslate = useMemo(() => {
    const translationCache = new Map<string, string>();
    
    return (key: TranslationKey, fallback?: string): string => {
      const cacheKey = `${key}:${fallback || ''}`;
      
      if (translationCache.has(cacheKey)) {
        return translationCache.get(cacheKey)!;
      }
      
      const translation = translate(key, fallback);
      translationCache.set(cacheKey, translation);
      
      return translation;
    };
  }, [translate, language]);

  return { 
    t: memoizedTranslate,
    language 
  };
};

// Hook para configuración de idioma
export const useLanguageSelector = () => {
  const { 
    language, 
    setLanguage, 
    isLoading, 
    getAvailableLanguages, 
    isLanguageSupported 
  } = useOptimizedLocalization();

  const availableLanguages = useMemo(() => getAvailableLanguages(), [getAvailableLanguages]);

  return {
    currentLanguage: language,
    availableLanguages,
    setLanguage,
    isLoading,
    isLanguageSupported
  };
};