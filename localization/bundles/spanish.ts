/**
 * BUNDLE DE TRADUCCIONES EN ESPAÑOL
 * Bundle separado para optimizar carga (lazy loading)
 */

import { LanguageBundle } from '../types';

export const spanishBundle: LanguageBundle = {
  code: 'es',
  name: 'Spanish',
  nativeName: 'Español',
  translations: {
    // Navegación principal
    "nav.home": "Inicio",
    "nav.plaza": "Plaza",
    "nav.plant": "Planta",
    "nav.language": "Idioma",
        // Títulos de pantallas
    "language.title": "Idioma",
    "glossary.title": "Glosario",
    "info.title": "Información Adicional",
    "results.title": "Resultados",
    "references.title": "Referencias",
    "nav.model": "Modelo 3D",
    "nav.map": "Mapa",
    "nav.info": "Información Adicional",
    "nav.references": "Referencias",
    "nav.glossary": "Glosario",
    "nav.results": "Resultados",
    "nav.back.to.menu": "Volver al Menú",
    "nav.main.menu": "Menú Principal",
    
    // Plaza y ubicación
    "plaza.mendoza.squares": "Plazas de Mendoza",
    "plaza.san.martin": "Plaza San Martín",
    "plaza.independencia": "Plaza Independencia",
    "plaza.espana": "Plaza España",
    "plaza.italia": "Plaza Italia",
    "plaza.chile": "Plaza Chile",
    
    // Acciones del usuario
    "action.start.tour": "Iniciar Recorrido",
    "action.play.trivia": "Jugar Trivia",
    "action.additional.info": "Información Adicional",
    "action.retry": "Intentar de nuevo",
    "action.button.map": "Mapa",
    "action.button.model": "Modelo",
    
    // Solo información básica necesaria
    "botany.reference": "Referencia",
    
    // Paradas y plantas
    "stop.title": "Parada",
    "stop.flora.title": "Flora de la Parada",
    "plant.unknown": "Planta desconocida",
    
    // Estados y errores
    "error.retry": "Por favor, intente nuevamente",
    "state.loading": "Cargando...",
    "state.no.connection": "Sin conexión",
    
    // Legacy compatibility (sistema anterior)
    "start.tour": "Iniciar Recorrido",
    "play.trivia": "Jugar Trivia",
    "flora.title": "Flora de la Parada",
    "unknown.plant": "Planta desconocida",
    "naturalized": "Naturalizada",
    "economic.use": "Uso Economico", // Versión sin tilde para mejor compatibilidad web
    "drought.resistant": "Resistente a sequía",
    "exotic": "Exótica",
    "cold.resistant": "Resistente al frío",
    "salt.resistant": "Resistente a suelo salino",
    "back.to.menu": "Volver al Menú",
  }
};