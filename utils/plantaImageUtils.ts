import { Planta } from '../data/types';
import { generateImageIdentifier, getImageUrl, generateImageMap } from './imageManager';

/**
 * Helper para trabajar con datos de plantas y su gestión de imágenes
 */

/**
 * Enriquece los datos de planta con URLs de imagen dinámicas
 */
export const enrichPlantaWithImages = (planta: Planta): Planta & { 
  thumbnailUrl: string; 
  fullImageUrl: string;
  imageIdentifier: string;
} => {
  const identifier = generateImageIdentifier(planta.atributos.nombre, planta.id);
  
  return {
    ...planta,
    imageIdentifier: identifier,
    thumbnailUrl: getImageUrl('planta', identifier, 'thumbnail'),
    fullImageUrl: getImageUrl('planta', identifier, 'full'),
    atributos: {
      ...planta.atributos,
      // Si no existe imagenPath, usar la URL generada dinámicamente
      imagenPath: planta.atributos.imagenPath || getImageUrl('planta', identifier, 'full')
    }
  };
};

/**
 * Enriquece un array de plantas con URLs de imagen
 */
export const enrichPlantasWithImages = (plantas: Planta[]) => {
  return plantas.map(enrichPlantaWithImages);
};

/**
 * Genera un mapa de URLs de imagen para todas las plantas
 */
export const generatePlantaImageMap = (plantas: Planta[]) => {
  return generateImageMap(plantas, 'planta', 'thumbnail');
};

/**
 * Obtiene la URL de imagen de una planta por ID
 */
export const getPlantaImageUrl = (
  plantas: Planta[], 
  plantaId: string, 
  size: 'thumbnail' | 'full' = 'full'
): string => {
  const planta = plantas.find(p => p.id === plantaId);
  if (!planta) {
    return '/images/plantas/fallback.webp';
  }

  const identifier = generateImageIdentifier(planta.atributos.nombre, planta.id);
  return getImageUrl('planta', identifier, size);
};

/**
 * Genera el identificador de imagen para una planta específica
 */
export const getPlantaImageIdentifier = (planta: Planta): string => {
  return generateImageIdentifier(planta.atributos.nombre, planta.id);
};

/**
 * Helper simplificado para obtener URL de imagen de planta
 * Formato: ID-nombre-normalizado.webp
 */
export const getSimpleImageUrl = (plantaId: string, plantas: Planta[]): string => {
  const planta = plantas.find(p => p.id === plantaId);
  if (!planta) {
    return '/images/plantas/fallback.webp';
  }
  
  const identifier = generateImageIdentifier(planta.atributos.nombre, planta.id);
  return `/images/plantas/${identifier}.webp`;
};