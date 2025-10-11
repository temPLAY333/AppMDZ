/**
 * STYLING SYSTEM INDEX
 * Exportación centralizada del sistema de styling universal
 */

// Tipos y utilidades principales
export * from './types';
export { UniversalStyleSheet } from './UniversalStyleSheet';
export * from './theme';

// Re-exports convenientes
export {
  createStyles,
  responsiveStyles,
  composeStyles,
} from './UniversalStyleSheet';

export {
  AppTheme as theme,
  LegacyColors,
  LegacyFontSizes,
  LegacySpacing,
  commonStyles,
} from './theme';