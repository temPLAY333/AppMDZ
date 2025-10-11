/**
 * BUNDLE DE TRADUCCIONES EN INGLÉS
 * Bundle separado para optimizar carga (lazy loading)
 */

import { LanguageBundle } from '../types';

export const englishBundle: LanguageBundle = {
  code: 'en',
  name: 'English',
  nativeName: 'English',
  translations: {
    // Navegación principal
    "nav.home": "Home",
    "nav.plaza": "Square",
    "nav.plant": "Plant",
    "nav.language": "Language",
    "language.title": "Language",
    "glossary.title": "Glossary",
    "info.title": "Additional Information",
    "results.title": "Results",
    "references.title": "References",
    "nav.model": "3D Model",
    "nav.map": "Map",
    "nav.info": "Additional Information",
    "nav.references": "References",
    "nav.glossary": "Glossary",
    "nav.results": "Results",
    "nav.back.to.menu": "Back to Menu",
    "nav.main.menu": "Main Menu",
    
    // Plaza y ubicación
    "plaza.mendoza.squares": "Mendoza Squares",
    "plaza.san.martin": "San Martin Square",
    "plaza.independencia": "Independence Square",
    "plaza.espana": "Spain Square",
    "plaza.italia": "Italy Square",
    "plaza.chile": "Chile Square",
    
    // Acciones del usuario
    "action.start.tour": "Start Tour",
    "action.play.trivia": "Play Trivia",
    "action.additional.info": "Additional Information",
    "action.retry": "Try again",
    "action.button.map": "Map",
    "action.button.model": "Model",
    
    // Solo información básica necesaria
    "botany.reference": "Reference",
    
    // Paradas y plantas
    "stop.title": "Stop",
    "stop.flora.title": "Flora at Stop",
    "plant.unknown": "Unknown plant",
    
    // Estados y errores
    "error.retry": "Please try again",
    "state.loading": "Loading...",
    "state.no.connection": "No connection",
    
    // Legacy compatibility (sistema anterior)
    "start.tour": "Start Tour",
    "play.trivia": "Play Trivia",
    "flora.title": "Flora at Stop",
    "unknown.plant": "Unknown plant",
    "naturalized": "Naturalized",
    "economic.use": "Economic Use",
    "drought.resistant": "Drought Resistant",
    "exotic": "Exotic",
    "cold.resistant": "Cold Resistant",
    "salt.resistant": "Salt Resistant Soil",
    "back.to.menu": "Back to Menu",
  }
};