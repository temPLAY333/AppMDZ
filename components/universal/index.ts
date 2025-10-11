/**
 * UNIVERSAL COMPONENTS INDEX
 * Exportación centralizada de todos los componentes universales
 */

// Componentes base
export * from './UniversalView';
export * from './UniversalText';

// Re-exports convenientes con nombres más cortos para migración gradual
export {
  UniversalView as UView,
  Screen as UScreen,
  Container as UContainer,
  Card as UCard,
  Row as URow,
  Column as UColumn,
  Spacer as USpacer,
} from './UniversalView';

export {
  UniversalText as UText,
  Title as UTitle,
  Subtitle as USubtitle,
  BodyText as UBody,
  Caption as UCaption,
  ButtonText as UButtonText,
} from './UniversalText';