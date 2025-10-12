/**
 * Este archivo exporta todas las imágenes de plantas para su uso en la aplicación.
 * Ahora soporta múltiples imágenes por planta desde public/images/plantas/
 */

import { Platform } from 'react-native';
import { plantasPorId } from '../plantas';

// Cache para nombres slug ya calculados (optimización de rendimiento)
const slugCache: Map<string, string> = new Map();

/**
 * Convierte el nombre de una planta a formato de archivo (slug)
 * Ej: "Falsa Acacia" -> "falsa-acacia"
 */
const nombreASlug = (nombre: string): string => {
  return nombre
    .toLowerCase()
    .normalize('NFD') // Descomponer acentos
    .replace(/[\u0300-\u036f]/g, '') // Remover marcas diacríticas
    .replace(/[^a-z0-9\s]/g, '') // Solo letras, números y espacios
    .trim()
    .replace(/\s+/g, '-'); // Espacios a guiones
};

/**
 * Verifica si una planta tiene múltiples imágenes
 * Por ahora asumimos que plantas con carpetas organizadas tienen múltiples imágenes
 * En el futuro esto podría escanearse dinámicamente
 */
const tieneMultiplesImagenes = (id: string): boolean => {
  // Lista de plantas que sabemos que tienen múltiples imágenes
  // Esta función se puede extender para escanear dinámicamente las carpetas
  const plantasConMultiplesImagenes = ['36']; // Agregar más IDs según necesites
  return plantasConMultiplesImagenes.includes(id);
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
 * Genera imágenes de prueba mezclando la imagen real con imágenes aleatorias
 * Para testing mientras no tengamos todas las fotos múltiples
 * @param id - El ID de la planta
 * @param numImagenes - Número de imágenes deseadas
 * @returns Array con mezcla de imagen real + imágenes de otras plantas DIFERENTES
 */
export const getPlantaImagenesPrueba = (id: string, numImagenes: number = 5): string[] => {
  const imagenes: string[] = [];
  const nombreSlug = getPlantaNombreSlug(id);
  const planta = plantasPorId[id];
  
  console.log(`🌱 Generando ${numImagenes} imágenes para planta ID: ${id} (${planta?.atributos.nombre})`);
  
  if (!nombreSlug || !planta) {
    // Si no existe la planta, usar solo fallback
    for (let i = 0; i < numImagenes; i++) {
      imagenes.push('/images/plantas/fallback.svg');
    }
    console.log(`📸 Usando solo fallbacks para planta desconocida`);
    return imagenes;
  }

  const paddedId = id.padStart(2, '0');
  
  // Estrategia: Primero intentar usar múltiples imágenes de la misma planta si existen
  // Si no existen, usar la primera + imágenes aleatorias de otras plantas
  
  // Verificar si la planta tiene múltiples imágenes propias
  if (tieneMultiplesImagenes(id)) {
    console.log(`🎯 Planta ${id} detectada con múltiples imágenes - usando todas`);
    for (let i = 1; i <= numImagenes; i++) {
      const imagen = `/images/plantas/${id}/${paddedId}-${nombreSlug}-${i}.webp`;
      imagenes.push(imagen);
      console.log(`📸 Imagen ${i}: ${imagen}`);
    }
  } else {
    // Para otras plantas, usar la primera imagen + imágenes aleatorias de plantas conocidas
    const imagenPrincipal = `/images/plantas/${id}/${paddedId}-${nombreSlug}-1.webp`;
    imagenes.push(imagenPrincipal);
    console.log(`📸 Imagen principal: ${imagenPrincipal}`);
    
    // Obtener todas las plantas disponibles del catálogo (todas tienen imágenes)
    const todasLasPlantasIds = Object.keys(plantasPorId);
    const plantasDisponibles = todasLasPlantasIds.filter(plantaId => plantaId !== id);
    
    // Mezclar para obtener orden aleatorio
    const seed = Date.now() + Math.random();
    const plantasAleatorias = [...plantasDisponibles]
      .sort(() => {
        const random = Math.sin(seed * Math.random()) * 10000;
        return random - Math.floor(random);
      });
    
    console.log(`🎲 Plantas con imágenes disponibles: ${plantasAleatorias.join(', ')}`);
    
    // Completar con imágenes de otras plantas que sabemos que existen
    for (let i = 1; i < numImagenes && i-1 < plantasAleatorias.length; i++) {
      const randomPlantaId = plantasAleatorias[i-1];
      const randomNombreSlug = getPlantaNombreSlug(randomPlantaId);
      const paddedRandomId = randomPlantaId.padStart(2, '0');
      if (randomNombreSlug) {
        const imagenAleatoria = `/images/plantas/${randomPlantaId}/${paddedRandomId}-${randomNombreSlug}-1.webp`;
        imagenes.push(imagenAleatoria);
        console.log(`📸 Imagen ${i + 1}: ${imagenAleatoria} (planta ${randomPlantaId})`);
      }
    }
    
    // Si aún faltan imágenes, repetir algunas de las plantas disponibles con diferentes números
    while (imagenes.length < numImagenes) {
      const plantaIndex = (imagenes.length - 1) % plantasDisponibles.length;
      const plantaId = plantasDisponibles[plantaIndex];
      const nombreSlugExtra = getPlantaNombreSlug(plantaId);
      const paddedRandomId = plantaId.padStart(2, '0');
      const numeroImagen = Math.floor(Math.random() * 3) + 1; // Usar imágenes 1, 2, o 3
      if (nombreSlugExtra) {
        const imagenExtra = `/images/plantas/${plantaId}/${paddedRandomId}-${nombreSlugExtra}-${numeroImagen}.webp`;
        imagenes.push(imagenExtra);
        console.log(`📸 Imagen extra: ${imagenExtra}`);
      }
    }
  }
  
  console.log(`✅ Total de imágenes generadas: ${imagenes.length}`);
  console.log(`🔗 URLs finales:`, imagenes);
  
  return imagenes;
};

export default {
  getPlantaImagen,
  getPlantaImagenes,
  getPlantaImagenesPrueba,
  getPlantaNombreSlug
};