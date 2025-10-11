import { Plaza } from '../data/types';

/**
 * Helper para trabajar con imágenes de plazas
 */

/**
 * Obtiene la URL de imagen de una plaza por ID
 */
export const getPlazaImageUrl = (plazaId: string): string => {
  // IDs válidos según el mapeo
  const validPlazaIds = [
    'san-martin',
    'independencia', 
    'espana',
    'italia',
    'chile'
  ];
  
  // Normalizar ID (por si viene con formato diferente)
  const normalizedId = plazaId.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[áäàâ]/g, 'a')
    .replace(/[éëèê]/g, 'e')
    .replace(/[íïìî]/g, 'i')
    .replace(/[óöòô]/g, 'o')
    .replace(/[úüùû]/g, 'u')
    .replace(/ñ/g, 'n');
  
  if (validPlazaIds.includes(normalizedId)) {
    return `/images/plazas/${normalizedId}.webp`;
  }
  
  return '/images/plazas/fallback.webp';
};

/**
 * Normaliza el ID de plaza para uso en URLs
 */
export const normalizePlazaId = (plazaId: string): string => {
  return plazaId.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/plaza\s*/g, '') // Remove "plaza" prefix if exists
    .replace(/[áäàâ]/g, 'a')
    .replace(/[éëèê]/g, 'e')
    .replace(/[íïìî]/g, 'i')
    .replace(/[óöòô]/g, 'o')
    .replace(/[úüùû]/g, 'u')
    .replace(/ñ/g, 'n');
};

/**
 * Enriquece los datos de plaza con URL de imagen
 */
export const enrichPlazaWithImage = (plaza: Plaza): Plaza & { imageUrl: string } => {
  const normalizedId = normalizePlazaId(plaza.id);
  const imageUrl = getPlazaImageUrl(normalizedId);
  
  return {
    ...plaza,
    imageUrl
  };
};

/**
 * Enriquece un array de plazas con URLs de imagen
 */
export const enrichPlazasWithImages = (plazas: Plaza[]) => {
  return plazas.map(enrichPlazaWithImage);
};

/**
 * Obtiene todas las plazas disponibles con sus IDs normalizados
 */
export const getAvailablePlazas = () => {
  return [
    { id: 'san-martin', name: 'Plaza San Martín', url: '/images/plazas/san-martin.webp' },
    { id: 'independencia', name: 'Plaza Independencia', url: '/images/plazas/independencia.webp' },
    { id: 'espana', name: 'Plaza España', url: '/images/plazas/espana.webp' },
    { id: 'italia', name: 'Plaza Italia', url: '/images/plazas/italia.webp' },
    { id: 'chile', name: 'Plaza Chile', url: '/images/plazas/chile.webp' }
  ];
};