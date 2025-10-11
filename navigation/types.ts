/**
 * Universal Navigation Abstraction
 * Funciona tanto en React Native como en Web
 */

// Tipos universales para navegación
export interface NavigationParams {
  [key: string]: any;
}

export interface UniversalNavigation {
  navigate: (screenName: string, params?: NavigationParams) => void;
  goBack: () => void;
  replace: (screenName: string, params?: NavigationParams) => void;
  reset: (screenName: string, params?: NavigationParams) => void;
  canGoBack: () => boolean;
  getCurrentRoute: () => string | null;
}

// Platform detection - En React Native Web siempre usamos React Navigation
export const isWeb = () => {
  // Para esta app, nunca usamos navegación web pura
  // React Native Web con Expo siempre usa React Navigation
  return false;
};

export const isNative = () => {
  // Siempre consideramos que estamos en entorno "native" para usar React Navigation
  return true;
};

// Screen names como constantes para evitar typos
export const SCREENS = {
  HOME: 'Home',
  IDIOMA: 'Idioma', 
  LOAD_SCREEN: 'LoadScreen',
  MENU_PLAZA: 'MenuPlaza',
  MAPA_PLAZA: 'MapaDeLaPlaza',
  PARADA_PLANTA: 'ParadaPlanta1',
  DETALLE_PLANTA: 'DetallePlanta',
  JUEGOS_PREGUNTA: 'JuegosPregunta1',
  REVISION: 'Revision',
  INFO_ADICIONAL: 'InformacionAdicional',
  REFERENCIAS: 'Referencias',
  GLOSARIO: 'Glosario'
} as const;

export type ScreenName = typeof SCREENS[keyof typeof SCREENS];

// Validación de rutas
export const isValidScreen = (screenName: string): screenName is ScreenName => {
  return Object.values(SCREENS).includes(screenName as ScreenName);
};