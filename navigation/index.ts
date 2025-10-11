/**
 * Universal Navigation Hook
 * Auto-detecta plataforma y retorna el navegador correcto
 */

import { UniversalNavigation, isNative } from './types';
import { useReactNativeNavigation } from './ReactNativeNavigation';
import { useWebNavigation } from './WebNavigation';

/**
 * Hook universal que funciona en Native y Web
 * Reemplaza useNavigation() de React Navigation
 */
export const useUniversalNavigation = (): UniversalNavigation => {
  if (isNative()) {
    return useReactNativeNavigation();
  } else {
    return useWebNavigation();
  }
};

// Export de conveniencia
export { SCREENS } from './types';
export type { UniversalNavigation, NavigationParams, ScreenName } from './types';