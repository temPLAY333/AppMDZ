import React, { useMemo } from 'react';
import { Text, Platform, View } from 'react-native';
import UniversalEmoji from './UniversalEmoji';

interface EmojiTextProps {
  children: string;
  style?: any;
  emojiSize?: number;
}

/**
 * Componente que FUERZA el uso de Twemoji para texto con emojis mezclado
 * Renderiza texto con emojis usando UniversalEmoji para garantizar consistencia
 */
const EmojiText: React.FC<EmojiTextProps> = ({ children, style, emojiSize = 16 }) => {
  
  const parsedContent = useMemo(() => {
    if (!children) {
      return children;
    }

    // Regex para detectar emojis (incluye banderas y símbolos)
    const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F018}-\u{1F0FF}]/gu;
    
    if (!emojiRegex.test(children)) {
      return children; // No hay emojis, devolver string
    }

    // Dividir el texto en partes no-emoji y emojis
    const parts = [];
    let lastIndex = 0;
    let match;

    emojiRegex.lastIndex = 0; // Reset regex
    
    while ((match = emojiRegex.exec(children)) !== null) {
      // Agregar texto antes del emoji
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: children.slice(lastIndex, match.index),
          key: `text-${lastIndex}`
        });
      }
      
      // Agregar emoji
      const emoji = match[0];
      parts.push({
        type: 'emoji',
        content: emoji,
        key: `emoji-${match.index}`,
        isFlag: emoji.match(/[\u{1F1E0}-\u{1F1FF}]/gu) ? true : false
      });
      
      lastIndex = match.index + match[0].length;
    }
    
    // Agregar texto restante
    if (lastIndex < children.length) {
      parts.push({
        type: 'text',
        content: children.slice(lastIndex),
        key: `text-${lastIndex}`
      });
    }
    
    return parts;
  }, [children]);

  // Si no hay emojis, renderizar texto normal
  if (typeof parsedContent === 'string') {
    return <Text style={style}>{children}</Text>;
  }

  return (
    <Text style={style}>
      {parsedContent.map((part) => {
        if (part.type === 'text') {
          return part.content;
        } else {
          // Usar UniversalEmoji para garantizar consistencia
          return (
            <UniversalEmoji
              key={part.key}
              emoji={part.content}
              size={emojiSize}
              isFlag={part.isFlag}
            />
          );
        }
      })}
    </Text>
  );
};

export default EmojiText;