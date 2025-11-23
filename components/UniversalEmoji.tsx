import React from 'react';
import { Image, Text, TextStyle, ImageStyle } from 'react-native';
import { getTwemojiUrl } from '../utils/twemojiSetup';

interface UniversalEmojiProps {
  emoji: string;
  size?: number;
  style?: ImageStyle | TextStyle;
  isFlag?: boolean;
}

/**
 * Componente que FUERZA el uso de Twemoji para consistencia total
 * - En React Native nativo: usa emojis del sistema (por limitaciones de la plataforma)
 * - En React Native Web: SIEMPRE usa imágenes SVG de Twemoji
 */
const UniversalEmoji: React.FC<UniversalEmojiProps> = ({ 
  emoji, 
  size = 16, 
  style,
  isFlag = false
}) => {
  // Versión web-only: siempre forzamos Twemoji, removidas ramas nativas

  // Mapeo especial para emojis corruptos y compuestos
  let cleanEmoji = emoji;
  if (emoji.includes('�🇷')) {
    cleanEmoji = '🇦🇷'; // Bandera argentina completa
  }
  // Si el emoji es compuesto (edificio + bandera), tomar solo el edificio
  // Ejemplo: 🏛🇦🇷 -> 🏛
  const emojiArray = Array.from(cleanEmoji);
  if (emojiArray.length > 2 && /[\u{1F1E0}-\u{1F1FF}]/gu.test(cleanEmoji) && !/^[\u{1F1E0}-\u{1F1FF}]{2}$/gu.test(cleanEmoji)) {
    // Contiene una bandera pero NO es solo una bandera, tomar el primer emoji
    cleanEmoji = emojiArray[0];
  }

  // En web, FORZAR uso de imágenes SVG de Twemoji
  const twemojiUrl = getTwemojiUrl(cleanEmoji);

  return (
    <Image
      source={{ uri: twemojiUrl }}
      resizeMode="contain"
      style={{
        width: isFlag ? size * 1.2 : size,
        height: isFlag ? size * 1.2 : size,
        ...(style as ImageStyle)
      }}
      // Fallback si la imagen no carga
      onError={(error) => {
        console.warn(`❌ Failed to load Twemoji for: ${cleanEmoji} (URL: ${twemojiUrl})`, error);
      }}
    />
  );
};

export default UniversalEmoji;