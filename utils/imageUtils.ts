// Utilidad para cargar imágenes dinámicamente
import { ImageSourcePropType } from 'react-native';

// Mapeo de rutas de imágenes a require
const imageMapping: Record<string, ImageSourcePropType> = {
  // Imágenes de plazas (solo modelos 3D)
  'Modelo-PSanMartin.png': require('../assets/plazas/Modelo-PSanMartin.png'),
  'Modelo-PChile.png': require('../assets/plazas/Modelo-PChile.png'),
  'Modelo-PEspaña.png': require('../assets/plazas/Modelo-PEspaña.png'),
  'Modelo-PIndependencia.png': require('../assets/plazas/Modelo-PIndependencia.png'),
  'Modelo-PItalia.png': require('../assets/plazas/Model-PItalia.png'),
  
  // Puedes agregar más imágenes según sea necesario
};

// Función para obtener una imagen por su nombre de archivo
export const getImageByPath = (path: string): ImageSourcePropType => {
  const fileName = path.split('/').pop() || '';
  
  if (imageMapping[fileName]) {
    return imageMapping[fileName];
  }
  
  console.warn(`Imagen no encontrada: ${fileName}`);
  return require('../assets/placeholder.png'); // Una imagen por defecto
};

export default imageMapping;