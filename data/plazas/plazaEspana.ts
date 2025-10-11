import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaEspana: Plaza = {
  id: 'plaza-espana',
  nombre: 'Plaza España',
  descripcion: 'La Plaza España es un importante espacio público en Mendoza que representa los lazos históricos y culturales entre Argentina y España. Destaca por su fuente central y su vegetación mediterránea.',
  bandera: '🇪🇸', // Bandera de España
  imagenPortada: require('../../assets/plazas/Modelo-PEspaña.png'), // Usamos la imagen del modelo como portada
  modeloImagenPath: require('../../assets/plazas/Modelo-PEspaña.png'),
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 1800,
      ubicacionY: 400,
      plantas: [
        {
          plantaId: '33', // Punica granatum
        },
        {
          plantaId: '41', // Vitex agnus-castus
        }
      ]
    },
    {
      id: 'parada-2',
      numero: 2,
      ubicacionX: 1800,
      ubicacionY: 1250,
      plantas: [
        {
          plantaId: '4', // Aesculus hipocastanum 
        },
        {
          plantaId: '11', // Cercis siliquastrum
        }
      ]
    },
    {
      id: 'parada-3',
      numero: 3,
      ubicacionX: 1800,
      ubicacionY: 1750,
      plantas: [
        {
          plantaId: '9', // Cedrus deodara 
        },
        {
          plantaId: '8' // Casuarina cunninghamiana
        }
      ]
    },
    {
      id: 'parada-4',
      numero: 4,
      ubicacionX: 500,
      ubicacionY: 1300,
      plantas: [
        {
          plantaId: '27' // Nerium oleander
        },
        {
          plantaId: '44' // Pittosporum tobira
        }
      ]
    },
    {
      id: 'parada-5',
      numero: 5,
      ubicacionX: 1400,
      ubicacionY: 400,
      plantas: [
        {
          plantaId: '17' // Firmiana simplex
        },
        {
          plantaId: '22' // Liquidambar styraciflua
        }
      ]
    }
  ]
};

export default plazaEspana;