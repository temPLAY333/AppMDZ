/**
 * Este archivo exporta todas las imágenes de plantas para su uso en la aplicación.
 * De esta manera, centralizamos la gestión de imágenes y evitamos problemas de importación.
 */

// Importamos las imágenes desde assets
const plantaImagenes: Record<string, any> = {
  '1': require('../../assets/EjemploPlanta1.png'),
  
  // Para los demás IDs, usamos la imagen correspondiente
  '2': require('../../assets/EjemploPlanta1.png'),
  '3': require('../../assets/EjemploPlanta1.png'),
  '4': require('../../assets/EjemploPlanta1.png'),
  '5': require('../../assets/EjemploPlanta1.png'),
  '6': require('../../assets/EjemploPlanta1.png'),
  '7': require('../../assets/EjemploPlanta1.png'),
  '8': require('../../assets/EjemploPlanta1.png'),
  '9': require('../../assets/EjemploPlanta1.png'),
  '10': require('../../assets/EjemploPlanta1.png'),
  '11': require('../../assets/EjemploPlanta1.png'),
  '12': require('../../assets/EjemploPlanta1.png'),
  '13': require('../../assets/EjemploPlanta1.png'),
  '14': require('../../assets/EjemploPlanta1.png'),
  '15': require('../../assets/EjemploPlanta1.png'),
  '16': require('../../assets/EjemploPlanta1.png'),
  '17': require('../../assets/EjemploPlanta1.png'),
  '18': require('../../assets/EjemploPlanta1.png'),
  '19': require('../../assets/EjemploPlanta1.png'),
  '20': require('../../assets/EjemploPlanta1.png'),
  '21': require('../../assets/EjemploPlanta1.png'),
  '22': require('../../assets/EjemploPlanta1.png'),
  '23': require('../../assets/EjemploPlanta1.png'),
  '24': require('../../assets/EjemploPlanta1.png'),
  '25': require('../../assets/EjemploPlanta1.png'),
  '26': require('../../assets/EjemploPlanta1.png'),
  '27': require('../../assets/EjemploPlanta1.png'),
  '28': require('../../assets/EjemploPlanta1.png'),
  '29': require('../../assets/EjemploPlanta1.png'),
  '30': require('../../assets/EjemploPlanta1.png'),
  '31': require('../../assets/EjemploPlanta1.png'),
  '32': require('../../assets/EjemploPlanta1.png'),
  '33': require('../../assets/EjemploPlanta1.png')
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