import React from 'react';
import { Platform, Image, Text, TextStyle, ImageStyle } from 'react-native';
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
  // En plataformas nativas, usar emoji del sistema (no hay otra opción viable)
  if (Platform.OS !== 'web') {
    return (
      <Text style={[{ fontSize: size }, style]}>
        {emoji}
      </Text>
    );
  }

  // Mapeo especial para emojis corruptos
  let cleanEmoji = emoji;
  if (emoji.includes('�🇷')) {
    cleanEmoji = '🇦🇷'; // Bandera argentina completa
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