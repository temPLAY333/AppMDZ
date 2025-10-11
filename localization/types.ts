/**
 * SISTEMA DE LOCALIZACIÓN OPTIMIZADO
 * Sistema escalable para múltiples idiomas con bundle splitting y memoización
 */

// Tipos base para el sistema de localización
export type SupportedLanguage = 'es' | 'en' | 'pt' | 'fr' | 'it'; // Preparado para 5 idiomas

// Estructura jerárquica para mejor organización
export type TranslationKey = 
  // Navegación principal
  | "nav.home" 
  | "nav.plaza" 
  | "nav.plant" 
  | "nav.language" 
  | "nav.model" 
  | "nav.map" 
  | "nav.info" 
  | "nav.references" 
  | "nav.glossary"
  | "nav.results"
  | "nav.back.to.menu"
  | "nav.main.menu"
  
  // Títulos de pantallas
  | "language.title"
  | "glossary.title"
  | "info.title"
  | "results.title"
  | "references.title"
  
  // Plaza y ubicación
  | "plaza.mendoza.squares"
  | "plaza.san.martin"
  | "plaza.independencia"
  | "plaza.espana"
  | "plaza.italia"
  | "plaza.chile"
  
  // Acciones del usuario
  | "action.start.tour"
  | "action.play.trivia"
  | "action.additional.info"
  | "action.retry"
  | "action.button.map"
  | "action.button.model"
  
  // Compatibilidad con sistema anterior (legacy keys)
  | "start.tour"
  | "play.trivia"
  | "flora.title"
  | "unknown.plant"
  | "naturalized"
  | "economic.use"
  | "drought.resistant"
  | "exotic"
  | "cold.resistant"
  | "salt.resistant"
  | "back.to.menu"
  
  // Información básica (las plantas tienen sus propias descripciones)
  | "botany.reference"
  
  // Paradas y plantas
  | "stop.title"
  | "stop.flora.title"
  | "plant.unknown"
  
  // Estados y errores
  | "error.retry"
  | "state.loading"
  | "state.no.connection";

// Estructura del diccionario de traducciones
export type TranslationDictionary = {
  [key in TranslationKey]: string;
};

// Estructura completa por idioma
export type LanguageBundle = {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  translations: TranslationDictionary;
};

// Metadata de idiomas disponibles
export const AVAILABLE_LANGUAGES: Record<SupportedLanguage, { name: string; nativeName: string; flag: string }> = {
  es: { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸' },
  pt: { name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  fr: { name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  it: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
};

// Configuración por defecto
export const DEFAULT_LANGUAGE: SupportedLanguage = 'es';

// Cache para optimización de performance
export type TranslationCache = Map<string, string>;
export type LanguageBundleCache = Map<SupportedLanguage, LanguageBundle>;