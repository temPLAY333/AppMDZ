/**
 * Este archivo exporta todas las imágenes de plantas para su uso en la aplicación.
 * De esta manera, centralizamos la gestión de imágenes y evitamos problemas de importación.
 */

// Importamos las imágenes desde assets/plants con el formato "nombreplanta-XX.jpg/png"
// donde XX es el ID de la planta
const plantaImagenes: Record<string, any> = {
  '1': require('../../assets/plants/viscote-01.jpg'),
  '2': require('../../assets/plants/acacianegra-02.jpg'),
  '3': require('../../assets/plants/arboldelcielo-03.jpg'),
  '4': require('../../assets/plants/falsocastaño-04.png'),
  '5': require('../../assets/plants/araucariaaustraliana-05.png'),
  '6': require('../../assets/plants/pezuñadevaca-06.png'),
  '7': require('../../assets/plants/boj-07.jpg'),
  '8': require('../../assets/plants/casuarina-08.jpg'),
  '9': require('../../assets/plants/cedrodelhimalaya-09.jpg'),
  '10': require('../../assets/plants/palaoborracho-10.jpg'),
  '11': require('../../assets/plants/arboldejudea-11.jpg'),
  '12': require('../../assets/plants/coculo-12.png'),
  '13': require('../../assets/plants/cipres-13.jpg'),
  '14': require('../../assets/plants/evonimo-14.jpg'),
  '15': require('../../assets/plants/ceibo-15.jpg'),
  '16': require('../../assets/plants/acaciadetresespinas-16.jpg'),
  '17': require('../../assets/plants/parasolchino-17.jpg'),
  '18': require('../../assets/plants/fresno-18.jpg'),
  '19': require('../../assets/plants/jacaranda-19.png'),
  '20': require('../../assets/plants/arboldejupiter-20.jpg'),
  '21': require('../../assets/plants/ligustro-21.jpg'),
  '22': require('../../assets/plants/liquidambaramericano-22.jpg'),
  '23': require('../../assets/plants/magnollia-23.png'),
  '24': require('../../assets/plants/paraiso-24.png'),
  '25': require('../../assets/plants/morera-25.jpg'),
  '26': require('../../assets/plants/algarrobo-26.png'),
  '27': require('../../assets/plants/adelfa-27.jpg'),
  '28': require('../../assets/plants/pinodelhimalaya-28.jpg'),
  '29': require('../../assets/plants/azarero-29.jpg'),
  '30': require('../../assets/plants/platano-30.jpg'),
  '31': require('../../assets/plants/palmafenix-31.jpg'),
  '32': require('../../assets/plants/ombu-32.jpg'), 
  '33': require('../../assets/plants/granado-33.jpg'),
  '34': require('../../assets/plants/arboldelcorcho-34.png'),
  '35': require('../../assets/plants/falsaacacia-35.png'),
  '36': require('../../assets/plants/aguaribay-36.png'),
  '37': require('../../assets/plants/pindo-37.jpg'), 
  '38': require('../../assets/plants/tilo-38.jpg'),
  '39': require('../../assets/plants/tipa-39.jpg'),
  '40': require('../../assets/plants/sauzgatillo-40.jpg'),
  '41': require('../../assets/plants/palmerachina-41.jpg'),
  '42': require('../../assets/plants/palmeraabanico-42.jpg')
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