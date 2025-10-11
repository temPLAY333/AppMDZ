import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaChile: Plaza = {
  id: 'plaza-chile',
  nombre: 'Plaza Chile',
  descripcion: 'La Plaza Chile es un espacio dedicado a fortalecer los lazos de hermandad entre Argentina y Chile. Esta plaza representa la amistad entre ambas naciones y contiene especies vegetales representativas.',
  bandera: '🇨🇱', // Bandera de Chile
  imagenPortada: require('../../assets/plazas/Modelo-PChile.png'), // Usamos la imagen del modelo como portada
  modeloImagenPath: require('../../assets/plazas/Modelo-PChile.png'),
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 2100,
      ubicacionY: 400,
      plantas: [
        {
          plantaId: '9', // Cedrus deodara
        },
        {
          plantaId: '28', // Pinus griffithi 
        }
      ]
    },
    {
      id: 'parada-2',
      numero: 2,
      ubicacionX: 2000,
      ubicacionY: 1000,
      plantas: [
        {
          plantaId: '48', // Eucalyptus sp.
        },
        {
          plantaId: '12', // Cocculus laurifolius
        }
      ]
    },
    {
      id: 'parada-3',
      numero: 3,
      ubicacionX: 1600,
      ubicacionY: 1550,
      plantas: [
        {
          plantaId: '39', // Tilia cordata 
        },
        {
          plantaId: '31', // Phoenix canariensis
        }
      ]
    },
    {
      id: 'parada-4',
      numero: 4,
      ubicacionX: 1100,
      ubicacionY: 2000,
      plantas: [
        {
          plantaId: '26', // Prosopis sp. 
        },
        {
          plantaId: '21', // Ligustrum lucidum
        }
      ]
    },
    {
      id: 'parada-5',
      numero: 5,
      ubicacionX: 670,
      ubicacionY: 1800,
      plantas: [
        {
          plantaId: '37', // Schinus molle
        },
        {
          plantaId: '16', // Gleditsia triacanthos
        }
      ]
    }
  ]
};

export default plazaChile;