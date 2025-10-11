/**
 * React Native Navigation Implementation
 * Wrapper para React Navigation
 */

import { useNavigation as useRNNavigation } from '@react-navigation/native';
import { UniversalNavigation, NavigationParams, isValidScreen } from './types';

export const useReactNativeNavigation = (): UniversalNavigation => {
  const navigation = useRNNavigation<any>();

  return {
    navigate: (screenName: string, params?: NavigationParams) => {
      if (!isValidScreen(screenName)) {
        console.warn(`Invalid screen name: ${screenName}`);
        return;
      }
      navigation.navigate(screenName, params);
    },

    goBack: () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        console.warn('Cannot go back - no previous screen');
      }
    },

    replace: (screenName: string, params?: NavigationParams) => {
      if (!isValidScreen(screenName)) {
        console.warn(`Invalid screen name: ${screenName}`);
        return;
      }
      navigation.replace(screenName, params);
    },

    reset: (screenName: string, params?: NavigationParams) => {
      if (!isValidScreen(screenName)) {
        console.warn(`Invalid screen name: ${screenName}`);
        return;
      }
      navigation.reset({
        index: 0,
        routes: [{ name: screenName, params }],
      });
    },

    canGoBack: () => {
      return navigation.canGoBack();
    },

    getCurrentRoute: () => {
      const state = navigation.getState();
      if (state && state.routes && state.routes[state.index]) {
        return state.routes[state.index].name;
      }
      return null;
    }
  };
};