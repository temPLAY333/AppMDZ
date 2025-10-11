/**
 * LOCALIZATION SYSTEM INDEX
 * Exportación centralizada del sistema de localización optimizado
 */

// Tipos principales
export * from './types';

// Manager y contexto optimizado
export * from './LocalizationManager';
export * from './OptimizedLocalizationContext';

// Hooks convenientes
export {
  useOptimizedLocalization,
  useTranslation,
  useLanguageSelector
} from './OptimizedLocalizationContext';

// Compatibilidad con sistema actual - MIGRACIÓN GRADUAL
export {
  OptimizedLocalizationContext as LanguageContext,
  OptimizedLocalizationProvider as LanguageProvider,
  useOptimizedLocalization as useLanguage,
} from './OptimizedLocalizationContext';