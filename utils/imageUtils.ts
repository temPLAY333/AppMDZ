// Utilidad para cargar imágenes dinámicamente
import { ImageSourcePropType } from 'react-native';

// Mapeo de rutas de imágenes a require
const imageMapping: Record<string, ImageSourcePropType> = {
  // Imágenes de plazas
  'PSanMartin-Aerea-Normal1.png': require('../assets/PSanMartin-Aerea-Normal1.png'),
  'Modelo-PSanMartin.png': require('../assets/Modelo-PSanMartin.png'),
  
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