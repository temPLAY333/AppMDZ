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
      ubicacionX: 280,
      ubicacionY: 120,
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
      ubicacionX: 270,
      ubicacionY: 180,
      plantas: [
        {
          plantaId: 'planta-sin-indice-2', // Eucalyptus sp. (no está en el índice)
        },
        {
          plantaId: '12', // Cocculus laurifolius
        }
      ]
    },
    {
      id: 'parada-3',
      numero: 3,
      ubicacionX: 230,
      ubicacionY: 260,
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
      ubicacionX: 150,
      ubicacionY: 330,
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
      ubicacionX: 100,
      ubicacionY: 290,
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