/**
 * Este archivo exporta todas las imágenes de plantas para su uso en la aplicación.
 * Ahora soporta múltiples imágenes por planta desde public/images/plantas/
 */

import { Platform } from 'react-native';
import { plantasPorId } from '../plantas';

// Cache para nombres slug ya calculados (optimización de rendimiento)
const slugCache: Map<string, string> = new Map();

// Mapa con la cantidad real de imágenes por planta (actualizado después de la migración)
const imagenesDisponiblesPorPlanta: Record<string, number> = {
  '1': 9, '2': 7, '3': 4, '4': 9, '5': 7, '6': 7, '7': 6, '8': 3, '9': 4, '10': 6,
  '11': 2, '12': 3, '13': 4, '14': 1, '15': 6, '16': 6, '17': 5, '18': 4, '19': 9, '20': 4,
  '21': 4, '22': 5, '23': 8, '24': 13, '25': 1, '26': 2, '27': 13, '28': 1, '29': 11, '30': 13,
  '31': 1, '32': 6, '33': 7, '34': 4, '35': 10, '36': 12, '37': 3, '38': 6, '39': 4, '40': 11,
  '41': 3, '42': 1, '43': 3, '44': 1, '45': 8, '46': 5, '47': 8, '48': 5, '49': 0
};

/**
 * Convierte el nombre de una planta a formato de archivo (slug)
 * Ej: "Falsa Acacia" -> "falsaacacia" (sin guiones, coincide con nombres de archivos)
 */
const nombreASlug = (nombre: string): string => {
  return nombre
    .toLowerCase()
    .normalize('NFD') // Descomponer acentos
    .replace(/[\u0300-\u036f]/g, '') // Remover marcas diacríticas
    .replace(/[^a-z0-9]/g, '') // Solo letras y números (elimina espacios y caracteres especiales)
    .trim();
};

/**
 * Obtiene la cantidad real de imágenes disponibles para una planta
 * @param id - El ID de la planta
 * @returns Número de imágenes disponibles (mínimo 1)
 */
const getCantidadImagenesDisponibles = (id: string): number => {
  return imagenesDisponiblesPorPlanta[id] || 1;
};

/**
 * Obtiene el nombre slug de una planta por su ID
 * Usa el sistema centralizado de plantas con cache para optimización
 */
const getPlantaNombreSlug = (id: string): string | null => {
  // Verificar cache primero
  if (slugCache.has(id)) {
    return slugCache.get(id) || null;
  }
  
  const planta = plantasPorId[id];
  if (!planta) return null;
  
  const slug = nombreASlug(planta.atributos.nombre);
  // Guardar en cache para futuros usos
  slugCache.set(id, slug);
  
  return slug;
};

/**
 * Genera las URLs de múltiples imágenes para una planta
 * @param id - El ID de la planta
 * @param maxImagenes - Número máximo de imágenes a generar (4-6)
 * @returns Array de URLs de imágenes
 */
export const getPlantaImagenes = (id: string, maxImagenes: number = 5): string[] => {
  const nombreSlug = getPlantaNombreSlug(id);
  const imagenes: string[] = [];
  
  if (!nombreSlug) {
    // Si no existe la planta, usar fallback
    return ['/images/plantas/fallback.svg'];
  }
  
  // Generar URLs para las imágenes esperadas
  for (let i = 1; i <= maxImagenes; i++) {
    const paddedId = id.padStart(2, '0');
    const imagenUrl = `/images/plantas/${id}/${paddedId}-${nombreSlug}-${i}.webp`;
    imagenes.push(imagenUrl);
  }
  
  return imagenes;
};

/**
 * Obtiene la primera imagen de una planta (para compatibilidad con código existente)
 * @param id - El ID de la planta  
 * @returns La primera imagen de la planta o fallback
 */
export const getPlantaImagen = (id: string): string => {
  const imagenes = getPlantaImagenes(id, 1);
  return imagenes[0];
};

/**
 * Obtiene TODAS las imágenes reales disponibles para una planta
 * @param id - El ID de la planta
 * @param numImagenes - Parámetro opcional mantenido por compatibilidad (se ignora)
 * @returns Array con TODAS las imágenes disponibles de la planta
 */
export const getPlantaImagenesPrueba = (id: string, numImagenes?: number): string[] => {
  const imagenes: string[] = [];
  const nombreSlug = getPlantaNombreSlug(id);
  const planta = plantasPorId[id];
  
  if (!nombreSlug || !planta) {
    console.log(`⚠️ Planta ${id} no encontrada - usando fallback`);
    return ['/images/plantas/fallback.svg'];
  }

  const paddedId = id.padStart(2, '0');
  const cantidadReal = getCantidadImagenesDisponibles(id);
  
  console.log(`🌱 Cargando ${cantidadReal} imágenes reales para planta ID: ${id} (${planta.atributos.nombre})`);
  
  // Generar URLs para TODAS las imágenes disponibles
  // Formato especial: incluir ambas extensiones para fallback automático
  // Formato: "url.jpeg|url.jpg" - el componente intentará primero jpeg, luego jpg
  for (let i = 1; i <= cantidadReal; i++) {
    const baseUrl = `/images/plantas/${id}/${paddedId}-${nombreSlug}-${i}`;
    // Formato especial con pipe | para indicar fallback automático
    const imagenConFallback = `${baseUrl}.jpeg|${baseUrl}.jpg`;
    imagenes.push(imagenConFallback);
  }
  
  console.log(`✅ ${imagenes.length} imágenes con fallback automático para planta ${id}`);
  
  return imagenes;
};

export default {
  getPlantaImagen,
  getPlantaImagenes,
  getPlantaImagenesPrueba,
  getPlantaNombreSlug
};