/**
 * Sistema dinámico de gestión de imágenes
 * Elimina el hardcodeo y permite escalabilidad
 */

export type ImageSize = 'thumbnail' | 'full';
export type ImageType = 'planta' | 'plaza' | 'ui';

interface ImageConfig {
  basePath: string;
  fallback: string;
  supportedFormats: string[];
}

const IMAGE_CONFIG: Record<ImageType, ImageConfig> = {
  planta: {
    basePath: '/images/plantas',
    fallback: '/images/plantas/fallback.webp',
    supportedFormats: ['webp', 'jpg', 'png']
  },
  plaza: {
    basePath: '/images/plazas', 
    fallback: '/images/plazas/fallback.webp',
    supportedFormats: ['webp', 'jpg', 'png']
  },
  ui: {
    basePath: '/images/ui',
    fallback: '/images/ui/fallback.webp',
    supportedFormats: ['webp', 'svg', 'png']
  }
};

/**
 * Construye la URL de una imagen dinámicamente
 */
export const getImageUrl = (
  type: ImageType,
  identifier: string,
  size?: ImageSize,
  format: string = 'webp'
): string => {
  const config = IMAGE_CONFIG[type];
  
  // Para plantas: /images/plantas/thumbnails/roble-34.webp
  // Para plazas: /images/plazas/san-martin.webp
  let path = config.basePath;
  
  if (size && type === 'planta') {
    path += `/${size}`;
  }
  
  return `${path}/${identifier}.${format}`;
};

/**
 * Obtiene múltiples formatos para <picture> element
 */
export const getImageSources = (
  type: ImageType,
  identifier: string,
  size?: ImageSize
): Array<{ srcSet: string; type: string }> => {
  const config = IMAGE_CONFIG[type];
  
  return config.supportedFormats.map(format => ({
    srcSet: getImageUrl(type, identifier, size, format),
    type: `image/${format}`
  }));
};

/**
 * Verifica si una imagen existe (para fallbacks)
 */
export const getImageWithFallback = async (
  type: ImageType,
  identifier: string,
  size?: ImageSize
): Promise<string> => {
  const primaryUrl = getImageUrl(type, identifier, size);
  
  try {
    const response = await fetch(primaryUrl, { method: 'HEAD' });
    if (response.ok) {
      return primaryUrl;
    }
  } catch (error) {
    console.warn(`Image not found: ${primaryUrl}`);
  }
  
  return IMAGE_CONFIG[type].fallback;
};

/**
 * Helper para generar nombres consistentes a partir de datos
 */
export const generateImageIdentifier = (name: string, id?: string | number): string => {
  // Convierte "Roble Europeo" -> "roble-europeo" 
  // Con ID: "34-roble-europeo" (ID primero para mejor ordenamiento)
  const normalized = name
    .toLowerCase()
    .replace(/[áäàâ]/g, 'a')
    .replace(/[éëèê]/g, 'e')
    .replace(/[íïìî]/g, 'i')
    .replace(/[óöòô]/g, 'o')
    .replace(/[úüùû]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9\s]/g, '') // Remueve caracteres especiales
    .replace(/\s+/g, '-') // Espacios -> guiones
    .replace(/-+/g, '-') // Múltiples guiones -> uno solo
    .trim();
  
  return id ? `${id}-${normalized}` : normalized;
};

/**
 * Batch helper para generar todas las URLs de un conjunto de datos
 */
export const generateImageMap = <T extends { id: string | number; atributos: { nombre: string } }>(
  items: T[],
  type: ImageType,
  size?: ImageSize
): Record<string, string> => {
  const imageMap: Record<string, string> = {};
  
  items.forEach(item => {
    const identifier = generateImageIdentifier(item.atributos.nombre, item.id);
    imageMap[item.id.toString()] = getImageUrl(type, identifier, size);
  });
  
  return imageMap;
};