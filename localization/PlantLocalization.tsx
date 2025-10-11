/**
 * SISTEMA SIMPLE DE PLANTAS LOCALIZADAS
 * Hook para obtener descripción de planta en idioma actual
 */

import { SupportedLanguage } from './types';
import { Planta } from '../data/types';
import { useTranslation } from './';
import { useMemo } from 'react';
import { getPlantaImagen } from '../data/imagenes';

/**
 * PLANT LOCALIZATION MANAGER
 * Gestor central para obtener información de plantas localizada
 */
export class PlantLocalizationManager {
  /**
   * Obtiene la descripción de una planta en el idioma especificado
   */
  static getPlantDescription(
    planta: Planta, 
    language: SupportedLanguage
  ): string {
    const descriptions = planta.atributos.descripcionesMultilingue as any;
    
    // Prioridad: idioma solicitado > español (fallback) > inglés > primera disponible
    return descriptions[language] || 
           descriptions.es || 
           descriptions.en || 
           Object.values(descriptions)[0] || 
           'Descripción no disponible';
  }

  /**
   * Verifica si una planta tiene descripción en un idioma específico
   */
  static hasDescriptionInLanguage(
    planta: Planta, 
    language: SupportedLanguage
  ): boolean {
    const descriptions = planta.atributos.descripcionesMultilingue as any;
    return Boolean(descriptions[language]);
  }

  /**
   * Obtiene todos los idiomas disponibles para una planta
   */
  static getAvailableLanguagesForPlant(planta: Planta): SupportedLanguage[] {
    const descriptions = planta.atributos.descripcionesMultilingue as any;
    return Object.keys(descriptions).filter(lang => 
      descriptions[lang]
    ) as SupportedLanguage[];
  }
}

/**
 * HOOK: useSimplePlant
 * Hook optimizado para obtener información básica de planta localizada
 */
export const useSimplePlant = (planta: Planta) => {
  const { language } = useTranslation();

  // Descripción memoizada en el idioma actual
  const description = useMemo(() => {
    return PlantLocalizationManager.getPlantDescription(planta, language);
  }, [planta, language]);

  // Verificar si tiene descripción en idioma actual
  const hasDescriptionInCurrentLanguage = useMemo(() => {
    return PlantLocalizationManager.hasDescriptionInLanguage(planta, language);
  }, [planta, language]);

  // Idiomas disponibles para esta planta
  const availableLanguages = useMemo(() => {
    return PlantLocalizationManager.getAvailableLanguagesForPlant(planta);
  }, [planta]);

  return {
    // Datos localizados
    description,
    
    // Metadata de localización
    currentLanguage: language,
    hasDescriptionInCurrentLanguage,
    availableLanguages,
    
    // Datos base (sin cambios)
    id: planta.id,
    nombre: planta.atributos.nombre,
    nombreCientifico: planta.atributos.nombreCientifico,
    imagenPath: getPlantaImagen(planta.id), // Usar el sistema correcto de imágenes
    referencias: planta.atributos.referencias, // Emojis como están
  };
};

/**
 * HOOK: usePlantsList  
 * Hook para obtener estadísticas de plantas localizadas
 */
export const usePlantsList = (plantas: Planta[]) => {
  const { language } = useTranslation();

  // Filtrar plantas que tienen descripción en el idioma actual
  const plantsWithCurrentLanguage = useMemo(() => {
    return plantas.filter(planta => 
      PlantLocalizationManager.hasDescriptionInLanguage(planta, language)
    );
  }, [plantas, language]);

  // Estadísticas de localización
  const localizationStats = useMemo(() => {
    const total = plantas.length;
    const withCurrentLanguage = plantsWithCurrentLanguage.length;
    const percentage = total > 0 ? Math.round((withCurrentLanguage / total) * 100) : 0;

    return {
      total,
      withCurrentLanguage,
      percentage,
      missingTranslations: total - withCurrentLanguage
    };
  }, [plantas, plantsWithCurrentLanguage]);

  return {
    allPlants: plantas,
    plantsWithCurrentLanguage,
    localizationStats,
    currentLanguage: language
  };
};