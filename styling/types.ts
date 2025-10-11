/**
 * UNIVERSAL STYLING SYSTEM
 * Tipos y interfaces para styling que funcionan en React Native y Web
 */

import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

// Detección de plataforma
export const isWeb = typeof window !== 'undefined';
export const isNative = !isWeb;

// Tipos universales combinados - evitamos extends para evitar conflictos de propiedades
export interface UniversalStyle {
  // Core styling properties (compatible con React Native y Web)
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  margin?: ViewStyle['margin'];
  marginTop?: ViewStyle['marginTop'];
  marginRight?: ViewStyle['marginRight'];
  marginBottom?: ViewStyle['marginBottom'];
  marginLeft?: ViewStyle['marginLeft'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  marginVertical?: ViewStyle['marginVertical'];
  padding?: ViewStyle['padding'];
  paddingTop?: ViewStyle['paddingTop'];
  paddingRight?: ViewStyle['paddingRight'];
  paddingBottom?: ViewStyle['paddingBottom'];
  paddingLeft?: ViewStyle['paddingLeft'];
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
  paddingVertical?: ViewStyle['paddingVertical'];
  backgroundColor?: ViewStyle['backgroundColor'];
  borderRadius?: ViewStyle['borderRadius'];
  borderWidth?: ViewStyle['borderWidth'];
  borderColor?: ViewStyle['borderColor'];
  position?: ViewStyle['position'];
  top?: ViewStyle['top'];
  right?: ViewStyle['right'];
  bottom?: ViewStyle['bottom'];
  left?: ViewStyle['left'];
  flex?: ViewStyle['flex'];
  flexDirection?: ViewStyle['flexDirection'];
  flexWrap?: ViewStyle['flexWrap'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  alignSelf?: ViewStyle['alignSelf'];
  opacity?: ViewStyle['opacity'];
  zIndex?: ViewStyle['zIndex'];
  overflow?: 'visible' | 'hidden' | 'scroll'; // Unificado para evitar conflictos
  
  // Text properties
  color?: TextStyle['color'];
  fontSize?: TextStyle['fontSize'];
  fontWeight?: TextStyle['fontWeight'];
  fontFamily?: TextStyle['fontFamily'];
  textAlign?: TextStyle['textAlign'];
  lineHeight?: TextStyle['lineHeight'];
  
  // Propiedades específicas de web que pueden ser útiles
  cursor?: string;
  userSelect?: 'none' | 'auto' | 'text' | 'contain' | 'all';
  boxSizing?: 'border-box' | 'content-box';
  transition?: string;
  
  // Media queries para web (se ignorarán en Native)
  '@media (max-width: 768px)'?: UniversalStyle;
  '@media (min-width: 769px)'?: UniversalStyle;
  
  // Hover states para web (se ignorarán en Native)
  ':hover'?: UniversalStyle;
  ':active'?: UniversalStyle;
  ':focus'?: UniversalStyle;
}

// Interface para StyleSheet universal
export interface UniversalStyleSheet {
  [key: string]: UniversalStyle;
}

// Tipos para responsive breakpoints
export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export interface ResponsiveStyle {
  mobile: UniversalStyle;
  tablet?: UniversalStyle;
  desktop?: UniversalStyle;
}

// Theme system para consistencia
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    sizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    weights: {
      light: 'normal' | '300';
      regular: 'normal' | '400';
      medium: '500' | '600';
      bold: 'bold' | '700';
    };
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    full: number;
  };
}

// Utility types para performance
export type CacheKey = string;
export type StyleCache = Map<CacheKey, UniversalStyle>;