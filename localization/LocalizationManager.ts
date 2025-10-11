/**
 * LOCALIZATION MANAGER OPTIMIZADO
 * Sistema central con bundle splitting, cache y memoización
 */

import { useState, useCallback, useMemo } from 'react';
import { 
  SupportedLanguage, 
  LanguageBundle, 
  TranslationKey, 
  TranslationCache,
  LanguageBundleCache,
  DEFAULT_LANGUAGE,
  AVAILABLE_LANGUAGES
} from './types';

// Lazy loading de bundles - solo cargar cuando se necesite
const loadLanguageBundle = async (language: SupportedLanguage): Promise<LanguageBundle> => {
  console.log(`loadLanguageBundle function called with: ${language}`);
  switch (language) {
    case 'es':
      const { spanishBundle } = await import('./bundles/spanish');
      return spanishBundle;
    case 'en':
      const { englishBundle } = await import('./bundles/english');
      return englishBundle;
    case 'pt':
      const { portugueseBundle } = await import('./bundles/portuguese');
      return portugueseBundle;
    case 'fr':
      // TODO: Implementar cuando se agregue francés
      throw new Error('French bundle not implemented yet');
    case 'it':
      // TODO: Implementar cuando se agregue italiano
      throw new Error('Italian bundle not implemented yet');
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
};

/**
 * LOCALIZATION MANAGER CLASS
 * Maneja el cache, bundle loading y optimizaciones
 */
export class LocalizationManager {
  private static instance: LocalizationManager;
  private bundleCache: LanguageBundleCache = new Map();
  private translationCache: TranslationCache = new Map();
  private currentLanguage: SupportedLanguage = DEFAULT_LANGUAGE;
  private currentBundle: LanguageBundle | null = null;
  private instanceId: string;

  constructor() {
    this.instanceId = Math.random().toString(36).substring(7);
    console.log(`LocalizationManager constructor [${this.instanceId}] - DEFAULT_LANGUAGE:`, DEFAULT_LANGUAGE);
    console.log(`LocalizationManager constructor [${this.instanceId}] - this.currentLanguage:`, this.currentLanguage);
  }

  // Singleton pattern para evitar múltiples instancias
  static getInstance(): LocalizationManager {
    if (!LocalizationManager.instance) {
      console.log('Creating new LocalizationManager instance');
      LocalizationManager.instance = new LocalizationManager();
    }
    return LocalizationManager.instance;
  }

  /**
   * Cargar bundle de idioma con cache
   */
  async loadLanguage(language: SupportedLanguage): Promise<LanguageBundle> {
    console.log(`[${this.instanceId}] loadLanguage called with: ${language}, current: ${this.currentLanguage}`);
    console.log(`[${this.instanceId}] STACK TRACE:`, new Error().stack);
    
    // Verificar cache primero
    if (this.bundleCache.has(language)) {
      console.log(`[${this.instanceId}] Using cached bundle for ${language}`);
      const cachedBundle = this.bundleCache.get(language)!;
      this.currentBundle = cachedBundle;
      this.currentLanguage = language;
      console.log(`[${this.instanceId}] Updated currentLanguage to: ${this.currentLanguage}`);
      return cachedBundle;
    }

    try {
      console.log(`[${this.instanceId}] Loading new bundle for ${language}`);
      // Cargar bundle y guardarlo en cache
      const bundle = await loadLanguageBundle(language);
      this.bundleCache.set(language, bundle);
      this.currentBundle = bundle;
      this.currentLanguage = language;
      console.log(`[${this.instanceId}] Successfully loaded ${language}, currentLanguage now: ${this.currentLanguage}`);
      
      // Limpiar cache de traducciones al cambiar idioma
      this.translationCache.clear();
      
      return bundle;
    } catch (error) {
      console.error(`[${this.instanceId}] ERROR loading ${language}:`, error);
      
      // Fallback al idioma por defecto
      if (language !== DEFAULT_LANGUAGE) {
        console.warn(`[${this.instanceId}] Falling back from ${language} to ${DEFAULT_LANGUAGE}`);
        return this.loadLanguage(DEFAULT_LANGUAGE);
      }
      
      throw error;
    }
  }

  /**
   * Traducir texto con cache optimizado
   */
  translate(key: TranslationKey, fallback?: string): string {
    // Crear cache key único
    const cacheKey = `${this.currentLanguage}:${key}`;
    
    console.log(`[${this.instanceId}] TRANSLATE: key="${key}", currentLanguage="${this.currentLanguage}", hasBundle=${!!this.currentBundle}`);
    
    // Verificar cache de traducciones primero
    if (this.translationCache.has(cacheKey)) {
      const cached = this.translationCache.get(cacheKey)!;
      console.log(`TRANSLATE: Cache hit for "${key}" -> "${cached}"`);
      return cached;
    }

    // Si no hay bundle cargado, retornar fallback o key
    if (!this.currentBundle) {
      console.log(`TRANSLATE: No bundle loaded, returning fallback "${fallback || key}"`);
      return fallback || key;
    }

    // Obtener traducción del bundle
    const translation = this.currentBundle.translations[key];
    const result = translation || fallback || key;
    
    console.log(`TRANSLATE: Bundle translation for "${key}" -> "${result}"`);
    
    // Guardar en cache para futuras consultas
    this.translationCache.set(cacheKey, result);
    
    return result;
  }

  /**
   * Obtener idioma actual
   */
  getCurrentLanguage(): SupportedLanguage {
    return this.currentLanguage;
  }

  /**
   * Verificar si un idioma está disponible
   */
  isLanguageSupported(language: string): language is SupportedLanguage {
    return Object.keys(AVAILABLE_LANGUAGES).includes(language);
  }

  /**
   * Obtener lista de idiomas disponibles
   */
  getAvailableLanguages(): Array<{ code: SupportedLanguage; name: string; nativeName: string; flag: string }> {
    return Object.entries(AVAILABLE_LANGUAGES).map(([code, info]) => ({
      code: code as SupportedLanguage,
      ...info
    }));
  }

  /**
   * Pre-cargar idiomas comunes para mejor UX
   */
  async preloadCommonLanguages(): Promise<void> {
    const commonLanguages: SupportedLanguage[] = ['es', 'en'];
    const currentLang = this.currentLanguage; // Guardar idioma actual
    console.log(`[${this.instanceId}] Preloading common languages, preserving currentLanguage: ${currentLang}`);
    
    const loadPromises = commonLanguages.map(async (lang) => {
      try {
        // Solo pre-cargar en cache si no está ya cargado
        if (!this.bundleCache.has(lang)) {
          console.log(`[${this.instanceId}] Preloading ${lang} bundle`);
          const bundle = await loadLanguageBundle(lang);
          this.bundleCache.set(lang, bundle);
        }
      } catch (error) {
        console.warn(`Failed to preload language ${lang}:`, error);
      }
    });

    await Promise.allSettled(loadPromises);
    
    // CRÍTICO: Restaurar el idioma original después de precargar
    this.currentLanguage = currentLang;
    console.log(`[${this.instanceId}] Preload completed, currentLanguage restored to: ${this.currentLanguage}`);
  }

  /**
   * Limpiar cache (útil para testing o memory management)
   */
  clearCache(): void {
    this.bundleCache.clear();
    this.translationCache.clear();
  }
}

// Instancia singleton exportada
export const localizationManager = LocalizationManager.getInstance();