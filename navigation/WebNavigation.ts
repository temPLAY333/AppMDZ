/**
 * Web Navigation Implementation 
 * Compatible con React Router (cuando migres a web)
 */

import { UniversalNavigation, NavigationParams, isValidScreen, SCREENS } from './types';

// Simulación para desarrollo - después se reemplaza con React Router
let currentRoute: string = SCREENS.IDIOMA;
let routeHistory: string[] = [SCREENS.IDIOMA];

// URL mapping para web
const ROUTE_MAPPING: Record<string, string> = {
  [SCREENS.HOME]: '/',
  [SCREENS.IDIOMA]: '/idioma',
  [SCREENS.LOAD_SCREEN]: '/loading',
  [SCREENS.MENU_PLAZA]: '/plaza/:plazaId',
  [SCREENS.MAPA_PLAZA]: '/plaza/:plazaId/mapa',
  [SCREENS.PARADA_PLANTA]: '/plaza/:plazaId/parada/:paradaId',
  [SCREENS.DETALLE_PLANTA]: '/planta/:plantaId',
  [SCREENS.JUEGOS_PREGUNTA]: '/plaza/:plazaId/trivia',
  [SCREENS.REVISION]: '/plaza/:plazaId/resultados',
  [SCREENS.INFO_ADICIONAL]: '/info',
  [SCREENS.REFERENCIAS]: '/info/referencias',
  [SCREENS.GLOSARIO]: '/info/glosario'
};

export const useWebNavigation = (): UniversalNavigation => {
  
  const updateURL = (screenName: string, params?: NavigationParams) => {
    let url = ROUTE_MAPPING[screenName] || '/';
    
    // Reemplazar parámetros en la URL
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url = url.replace(`:${key}`, String(value));
      });
    }
    
    // En desarrollo, solo log. En producción, usar History API
    if (typeof window !== 'undefined') {
      console.log(`Web Navigation: ${url}`, params);
      // window.history.pushState({}, '', url);
    }
  };

  return {
    navigate: (screenName: string, params?: NavigationParams) => {
      if (!isValidScreen(screenName)) {
        console.warn(`Invalid screen name: ${screenName}`);
        return;
      }
      
      routeHistory.push(screenName);
      currentRoute = screenName;
      updateURL(screenName, params);
    },

    goBack: () => {
      if (routeHistory.length > 1) {
        routeHistory.pop(); // Remove current
        const previousRoute = routeHistory[routeHistory.length - 1];
        currentRoute = previousRoute;
        updateURL(previousRoute);
      } else {
        console.warn('Cannot go back - no previous screen');
      }
    },

    replace: (screenName: string, params?: NavigationParams) => {
      if (!isValidScreen(screenName)) {
        console.warn(`Invalid screen name: ${screenName}`);
        return;
      }
      
      // Replace current route in history
      routeHistory[routeHistory.length - 1] = screenName;
      currentRoute = screenName;
      updateURL(screenName, params);
    },

    reset: (screenName: string, params?: NavigationParams) => {
      if (!isValidScreen(screenName)) {
        console.warn(`Invalid screen name: ${screenName}`);
        return;
      }
      
      // Clear history and set new route
      routeHistory = [screenName];
      currentRoute = screenName;
      updateURL(screenName, params);
    },

    canGoBack: () => {
      return routeHistory.length > 1;
    },

    getCurrentRoute: () => {
      return currentRoute;
    }
  };
};