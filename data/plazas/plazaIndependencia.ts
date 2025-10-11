import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaIndependencia: Plaza = {
  id: 'plaza-independencia',
  nombre: 'Plaza Independencia',
  descripcion: 'La Plaza Independencia es la plaza principal de Mendoza, ubicada en el centro de la ciudad. Fue diseñada después del terremoto de 1861 y representa el corazón cívico y cultural de la ciudad, con una gran variedad de especies vegetales.',
  bandera: '🇦🇷', // Bandera de Argentina
  imagenPortada: require('../../assets/plazas/Modelo-PIndependencia.png'), // Usamos la imagen del modelo como portada
  modeloImagenPath: require('../../assets/plazas/Modelo-PIndependencia.png'),
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 300,
      ubicacionY: 1600,
      plantas: [
        {
          plantaId: '29' // Tipuana tipu
        },
        {
          plantaId: '1' // Acacia visco
        }
      ]
    },
    {
      id: 'parada-2',
      numero: 2,
      ubicacionX: 400,
      ubicacionY: 2000,
      plantas: [
        {
          plantaId: '13' // Cupressus sp.
        },
        {
          plantaId: '27' // Phoenix canariensis
        }
      ]
    },
    {
      id: 'parada-3',
      numero: 3,
      ubicacionX: 400,
      ubicacionY: 2300,
      plantas: [
        {
          plantaId: '49' // Pinus halepensis
        },
        {
          plantaId: '41' // Vitex agnus-castus
        }
      ]
    },
    {
      id: 'parada-4',
      numero: 4,
      ubicacionX: 200,
      ubicacionY: 2000,
      plantas: [
        {
          plantaId: '48' // Eucalyptus sp.
        },
        {
          plantaId: '25' // Morus nigra 
        }
      ]
    },
    {
      id: 'parada-5',
      numero: 5,
      ubicacionX: 700,
      ubicacionY: 2200,
      plantas: [
        {
          plantaId: '16' // Gleditsia triacanthos
        },
        {
          plantaId: '36' // Robinia pseudoacacia
        }
      ]
    },
    {
      id: 'parada-6',
      numero: 6,
      ubicacionX: 1600,
      ubicacionY: 2400,
      plantas: [
        {
          plantaId: '28' // Pinus griffithi
        },
        {
          plantaId: '43' // Washingtonia robusta 
        }
      ]
    },
    {
      id: 'parada-7',
      numero: 7,
      ubicacionX: 2000,
      ubicacionY: 2200,
      plantas: [
        {
          plantaId: '9' // Cedrus deodara
        },
        {
          plantaId: '8' // Casuarina cunninghamiana
        }
      ]
    },
    {
      id: 'parada-8',
      numero: 8,
      ubicacionX: 2000,
      ubicacionY: 800,
      plantas: [
        {
          plantaId: '18' // Fraxinus sp.
        },
        {
          plantaId: '35' // Quercus suber 
        }
      ]
    },
    {
      id: 'parada-9',
      numero: 9,
      ubicacionX: 1400,
      ubicacionY: 800,
      plantas: [
        {
          plantaId: '23' // Magnolia grandiflora
        },
        {
          plantaId: '5' // Araucaria bidwilli
        }
      ]
    },
    {
      id: 'parada-10',
      numero: 10,
      ubicacionX: 500,
      ubicacionY: 900,
      plantas: [
        {
          plantaId: '37' // Schinus molle
        },
        {
          plantaId: '34' // Quercus robur
        }
      ]
    }
  ]
};

export default plazaIndependencia;