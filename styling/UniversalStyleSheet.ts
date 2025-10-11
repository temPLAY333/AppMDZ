/**
 * UNIVERSAL STYLESHEET CREATOR
 * Sistema que crea estilos compatibles con React Native y Web
 */

import { StyleSheet as RNStyleSheet } from 'react-native';
import { UniversalStyle, UniversalStyleSheet as UniversalStyleSheetType, isWeb, isNative, StyleCache } from './types';

// Cache para optimización de performance
const styleCache: StyleCache = new Map();

/**
 * Crea un StyleSheet universal que funciona en Native y Web
 */
export class UniversalStyleSheet {
  private static cache = new Map<string, any>();

  static create<T extends UniversalStyleSheetType>(styles: T): T {
    // En producción, usar cache para mejor performance
    const cacheKey = JSON.stringify(styles);
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    let processedStyles: any = {};

    for (const [key, style] of Object.entries(styles)) {
      processedStyles[key] = this.processStyle(style);
    }

    // En React Native, usar el StyleSheet nativo para optimización
    if (isNative) {
      processedStyles = RNStyleSheet.create(processedStyles);
    }

    this.cache.set(cacheKey, processedStyles);
    return processedStyles;
  }

  /**
   * Procesa un estilo individual para la plataforma actual
   */
  private static processStyle(style: UniversalStyle): any {
    if (!style) return {};

    let processedStyle: any = {};

    // Copiar propiedades base
    for (const [key, value] of Object.entries(style)) {
      if (this.isBaseProperty(key)) {
        processedStyle[key] = value;
      }
    }

    // Procesar propiedades específicas de plataforma
    if (isWeb) {
      processedStyle = this.processWebStyle(style, processedStyle);
    } else {
      processedStyle = this.processNativeStyle(style, processedStyle);
    }

    return processedStyle;
  }

  /**
   * Procesa estilos para Web
   */
  private static processWebStyle(style: UniversalStyle, baseStyle: any): any {
    const webStyle = { ...baseStyle };

    // Agregar propiedades específicas de web
    if (style.cursor) webStyle.cursor = style.cursor;
    if (style.userSelect) webStyle.userSelect = style.userSelect;
    if (style.boxSizing) webStyle.boxSizing = style.boxSizing;
    if (style.transition) webStyle.transition = style.transition;

    // Procesar media queries
    if (style['@media (max-width: 768px)']) {
      // En web, aplicaríamos esto con CSS-in-JS real
      // Por ahora, simplemente lo ignoramos o lo aplicamos condicionalmente
    }

    // Procesar pseudo-selectors
    if (style[':hover']) {
      // Similar - en una implementación real usaríamos emotion/styled-components
    }

    return webStyle;
  }

  /**
   * Procesa estilos para React Native
   */
  private static processNativeStyle(style: UniversalStyle, baseStyle: any): any {
    // En React Native, solo devolver las propiedades compatibles
    // Las propiedades específicas de web se ignoran automáticamente
    return baseStyle;
  }

  /**
   * Verifica si una propiedad es una propiedad base de styling
   */
  private static isBaseProperty(key: string): boolean {
    const webSpecificProps = ['cursor', 'userSelect', 'boxSizing', 'transition'];
    const pseudoSelectors = [':hover', ':active', ':focus'];
    const mediaQueries = key.startsWith('@media');

    return !webSpecificProps.includes(key) && 
           !pseudoSelectors.includes(key) && 
           !mediaQueries;
  }

  /**
   * Utilidad para crear estilos responsive
   */
  static responsive(styles: {
    mobile: UniversalStyle;
    tablet?: UniversalStyle;
    desktop?: UniversalStyle;
  }): UniversalStyle {
    if (isNative) {
      // En React Native, solo usar mobile por defecto
      return styles.mobile;
    }

    // En web, aplicar media queries - casting necesario para media queries
    return {
      ...styles.mobile,
      '@media (min-width: 768px)': styles.tablet || styles.mobile,
      '@media (min-width: 1024px)': styles.desktop || styles.tablet || styles.mobile,
    } as UniversalStyle;
  }

  /**
   * Utilidad para combinar estilos de manera eficiente
   */
  static compose(...styles: (UniversalStyle | UniversalStyle[] | null | undefined)[]): UniversalStyle {
    const flattened = styles.flat().filter(Boolean) as UniversalStyle[];
    
    if (flattened.length === 0) return {};
    if (flattened.length === 1) return flattened[0];

    // Usar Object.assign para mejor performance que spread
    return Object.assign({}, ...flattened);
  }
}

// Export conveniente
export const createStyles = UniversalStyleSheet.create.bind(UniversalStyleSheet);
export const responsiveStyles = UniversalStyleSheet.responsive.bind(UniversalStyleSheet);
export const composeStyles = UniversalStyleSheet.compose.bind(UniversalStyleSheet);