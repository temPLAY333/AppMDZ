/**
 * TEMA UNIVERSAL DE LA APP
 * Basado en GlobalStyles.ts existente, optimizado para Native + Web
 */

import { Theme } from './types';

export const AppTheme: Theme = {
  colors: {
    // Colores principales de la app (manteniendo compatibilidad)
    primary: "#018b9f", // colorDarkcyan - color principal de la marca
    secondary: "#8dbf2f", // colorYellowgreen - color secundario natural
    background: "#fff", // colorWhite - fondo principal
    surface: "#f8f9fa", // backgroundLight - superficie de componentes
    text: "#333333", // textDark - texto principal
    textSecondary: "#05181f", // colorGray200 - texto secundario
    accent: "#10668a", // colorSteelblue - acentos
    success: "#8dbf2f", // Verde natural para éxito
    warning: "#ffc107", // Amarillo estándar
    error: "#dc3545", // Rojo estándar
  },

  spacing: {
    // Basado en Gap y Padding existentes
    xs: 8,   // p_8
    sm: 12,  // p_12
    md: 19,  // gap_19, p_19
    lg: 22,  // gap_22, p_22
    xl: 36,  // p_36
  },

  typography: {
    sizes: {
      // Basado en FontSize existente
      xs: 14,  // size_sm
      sm: 16,  // size_md
      md: 18,  // size_lg
      lg: 24,  // size_24
      xl: 32,  // size_32
      xxl: 48, // size_48
    },
    weights: {
      light: 'normal',
      regular: 'normal',
      medium: '600',
      bold: 'bold',
    },
  },

  borderRadius: {
    // Basado en Border existente
    sm: 5,   // br_5
    md: 10,  // br_10
    lg: 40,  // br_40
    full: 100, // br_100
  },
};

// Helpers para mantener compatibilidad con código existente
export const LegacyColors = {
  colorBlack: AppTheme.colors.text,
  colorYellowgreen: AppTheme.colors.secondary,
  colorDarkcyan: AppTheme.colors.primary,
  colorSteelblue: AppTheme.colors.accent,
  colorWhite: AppTheme.colors.background,
  colorGray300: "rgba(0, 0, 0, 0.25)",
  colorGray200: AppTheme.colors.textSecondary,
  colorGray100: "#05222e",
  primary: AppTheme.colors.primary,
  primaryLight: "#e1f5f7",
  textDark: AppTheme.colors.text,
  white: AppTheme.colors.background,
  borderLight: "#dee2e6",
  backgroundLight: AppTheme.colors.surface,
  backgroundInfo: "#e2f3f5",
};

export const LegacyFontSizes = {
  size_sm: AppTheme.typography.sizes.xs,
  size_md: AppTheme.typography.sizes.sm,
  size_lg: AppTheme.typography.sizes.md,
  size_20: 20,
  size_24: AppTheme.typography.sizes.lg,
  size_32: AppTheme.typography.sizes.xl,
  size_36: 36,
  size_40: 40,
  size_48: AppTheme.typography.sizes.xxl,
  size_64: 64,
};

export const LegacySpacing = {
  gap_10: 10,
  gap_19: AppTheme.spacing.md,
  gap_22: AppTheme.spacing.lg,
  gap_30: 30,
  gap_60: 60,
  p_8: AppTheme.spacing.xs,
  p_10: 10,
  p_12: AppTheme.spacing.sm,
  p_15: 15,
  p_18: 18,
  p_19: AppTheme.spacing.md,
  p_22: AppTheme.spacing.lg,
  p_36: AppTheme.spacing.xl,
};

// Utilidades para componentes
export const commonStyles = {
  // Contenedores base
  screen: {
    flex: 1,
    backgroundColor: AppTheme.colors.background,
  },
  
  container: {
    flex: 1,
    padding: AppTheme.spacing.md,
  },
  
  card: {
    backgroundColor: AppTheme.colors.surface,
    borderRadius: AppTheme.borderRadius.md,
    padding: AppTheme.spacing.md,
    shadowColor: AppTheme.colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Para Android
  },
  
  // Textos base
  title: {
    fontSize: AppTheme.typography.sizes.xl,
    fontWeight: AppTheme.typography.weights.bold,
    color: AppTheme.colors.text,
  },
  
  subtitle: {
    fontSize: AppTheme.typography.sizes.lg,
    fontWeight: AppTheme.typography.weights.medium,
    color: AppTheme.colors.text,
  },
  
  body: {
    fontSize: AppTheme.typography.sizes.sm,
    color: AppTheme.colors.text,
    lineHeight: AppTheme.typography.sizes.sm * 1.4,
  },
  
  caption: {
    fontSize: AppTheme.typography.sizes.xs,
    color: AppTheme.colors.textSecondary,
  },
  
  // Botones base
  button: {
    backgroundColor: AppTheme.colors.primary,
    paddingHorizontal: AppTheme.spacing.lg,
    paddingVertical: AppTheme.spacing.sm,
    borderRadius: AppTheme.borderRadius.md,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  
  buttonText: {
    color: AppTheme.colors.background,
    fontSize: AppTheme.typography.sizes.sm,
    fontWeight: AppTheme.typography.weights.medium,
  },
};