import { EmojiReferencia } from '../data/types';

// Descripción de cada referencia emoji
export const emojiDescripciones = {
  [EmojiReferencia.Naturalizada]: 'Naturalizada',
  [EmojiReferencia.UsoEconomico]: 'Uso Económico',
  [EmojiReferencia.ResistenteSequia]: 'Resistente a sequía',
  [EmojiReferencia.Exotica]: 'Exótica',
  [EmojiReferencia.ResistenteFrio]: 'Resistente al frío',
  [EmojiReferencia.ResistenteSueloSalino]: 'Resistente a suelo salino'
};

// Función para obtener la descripción de un emoji
export const getDescripcionEmoji = (emoji: EmojiReferencia): string => {
  return emojiDescripciones[emoji] || 'Desconocido';
};

// Obtener todos los emojis con sus descripciones
export const getAllEmojisWithDescriptions = (): Array<{emoji: EmojiReferencia, descripcion: string}> => {
  return Object.entries(emojiDescripciones).map(([emoji, descripcion]) => ({
    emoji: emoji as EmojiReferencia,
    descripcion
  }));
};

export default emojiDescripciones;