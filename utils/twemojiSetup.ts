// Web-only: se elimina uso de Platform

/**
 * Mapeo directo de emojis problemáticos a sus codepoints correctos
 */
const EMOJI_MAPPINGS: Record<string, string> = {
  // Emojis con modificadores de variación (URLs correctas sin fe0f)
  '🎖️': '1f396',      // Medalla militar
  '❄️': '2744',       // Copo de nieve
  
  // Banderas
  '🇦🇷': '1f1e6-1f1f7', // Argentina
  '🇪🇸': '1f1ea-1f1f8', // España
  '🇮🇹': '1f1ee-1f1f9', // Italia
  '🇨🇱': '1f1e8-1f1f1', // Chile
  '🇧🇷': '1f1e7-1f1f7', // Brasil
  
  // Emojis compuestos (solo usar primer emoji)
  '🏛🇦🇷': '1f3db',    // Edificio clásico (ignorar bandera)
  
  // Emojis de plantas
  '🪵': '1fab5',      // Tronco (para uso económico)
  '💰': '1f4b0',      // Dinero (fallback)
  '🌲': '1f332',      // Árbol perenne
  '💧': '1f4a7',      // Gota de agua
  '🌳': '1f333',      // Árbol deciduo
  '🌱': '1f331',      // Planta joven
};

/**
 * Convierte emoji a codepoint para URL de Twemoji
 */
export const getEmojiCodepoint = (emoji: string): string => {
  // Usar mapeo directo si existe
  if (EMOJI_MAPPINGS[emoji]) {
    return EMOJI_MAPPINGS[emoji];
  }
  
  // Fallback: cálculo automático
  const codepoints = [];
  for (let i = 0; i < emoji.length; i++) {
    const codepoint = emoji.codePointAt(i);
    if (codepoint) {
      codepoints.push(codepoint.toString(16).toLowerCase());
      // Los emojis con surrogates ocupan 2 posiciones
      if (codepoint > 0xFFFF) {
        i++;
      }
    }
  }
  return codepoints.join('-') || '1f600';
};

/**
 * Obtiene URL de Twemoji para un emoji
 */
export const getTwemojiUrl = (emoji: string): string => {
  const codepoint = getEmojiCodepoint(emoji);
  return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codepoint}.svg`;
};

/**
 * Extrae todos los emojis de un texto
 */
export const extractEmojis = (text: string): string[] => {
  const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]/gu;
  return text.match(emojiRegex) || [];
};

/**
 * Configuración global de CSS para Twemoji
 */
export const setupTwemojiStyles = (): void => {
  if (typeof window !== 'undefined') {
    const styleId = 'twemoji-global-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        /* Forzar Twemoji en toda la aplicación */
        .twemoji-container img {
          display: inline-block !important;
          width: 1em !important;
          height: 1em !important;
          vertical-align: middle !important;
          margin: 0 0.05em !important;
        }
        
        .twemoji-flag {
          width: 1.2em !important;
          height: 1.2em !important;
        }
        
        /* Ocultar emojis nativos cuando sea posible */
        .hide-native-emojis {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
};

export default {
  getEmojiCodepoint,
  getTwemojiUrl,
  extractEmojis,
  setupTwemojiStyles
};