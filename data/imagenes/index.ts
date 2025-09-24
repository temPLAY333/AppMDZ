/**
 * Este archivo exporta todas las imágenes de plantas para su uso en la aplicación.
 * De esta manera, centralizamos la gestión de imágenes y evitamos problemas de importación.
 */

// Importamos las imágenes desde assets
const plantaImagenes: Record<string, any> = {
  // Renombrando "Image-1@3x" a "CiudadDeMDZ" y "Image-3@3x" a "Image-1@3x"
  // para el ID 1 (Viscote)
  '1': require('../../assets/image-3@3x.png'),
  
  // Para los demás IDs, usamos la imagen correspondiente
  '2': require('../../assets/image-3@3x.png'),
  '3': require('../../assets/image-3@3x.png'),
  '4': require('../../assets/image-3@3x.png'),
  '5': require('../../assets/image-3@3x.png'),
  '6': require('../../assets/image-3@3x.png'),
  '7': require('../../assets/image-3@3x.png'),
  '8': require('../../assets/image-3@3x.png'),
  '9': require('../../assets/image-3@3x.png'),
  '10': require('../../assets/image-3@3x.png'),
  '11': require('../../assets/image-3@3x.png'),
  '12': require('../../assets/image-3@3x.png'),
  '13': require('../../assets/image-3@3x.png'),
  '14': require('../../assets/image-3@3x.png'),
  '15': require('../../assets/image-3@3x.png'),
  '16': require('../../assets/image-3@3x.png'),
  '17': require('../../assets/image-3@3x.png'),
  '18': require('../../assets/image-3@3x.png'),
  '19': require('../../assets/image-3@3x.png'),
  '20': require('../../assets/image-3@3x.png'),
  '21': require('../../assets/image-3@3x.png'),
  '22': require('../../assets/image-3@3x.png'),
  '23': require('../../assets/image-3@3x.png'),
  '24': require('../../assets/image-3@3x.png'),
  '25': require('../../assets/image-3@3x.png'),
  '26': require('../../assets/image-3@3x.png'),
  '27': require('../../assets/image-3@3x.png'),
  '28': require('../../assets/image-3@3x.png'),
  '29': require('../../assets/image-3@3x.png'),
  '30': require('../../assets/image-3@3x.png'),
  '31': require('../../assets/image-3@3x.png'),
  '32': require('../../assets/image-3@3x.png'),
  '33': require('../../assets/image-3@3x.png')
};

/**
 * Obtiene la imagen correspondiente a una planta por su ID
 * @param id - El ID de la planta
 * @returns La imagen correspondiente o una imagen por defecto
 */
export const getPlantaImagen = (id: string): any => {
  return plantaImagenes[id] || plantaImagenes['1']; // Retorna la imagen del ID o la primera como fallback
};

export default plantaImagenes;