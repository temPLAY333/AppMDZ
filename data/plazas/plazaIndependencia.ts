import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaIndependencia: Plaza = {
  id: 'plaza-independencia',
  nombre: 'Plaza Independencia',
  descripcion: 'La Plaza Independencia es la plaza principal de Mendoza, ubicada en el centro de la ciudad. Fue diseñada después del terremoto de 1861 y representa el corazón cívico y cultural de la ciudad, con una gran variedad de especies vegetales.',
  bandera: '🇦🇷', // Bandera de Argentina
  imagenPortada: require('../../assets/CiudadDeMDZ.png'), // Usar una imagen existente temporalmente
  mapaImagenPath: require('../../assets/PSanMartin-Aerea-Normal.png'), // Usar una imagen existente temporalmente
  modeloImagenPath: require('../../assets/Modelo-PSanMartin.png'), // Usar una imagen existente temporalmente
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 150,
      ubicacionY: 120,
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
      ubicacionX: 220,
      ubicacionY: 180,
      plantas: [
        {
          plantaId: 'planta-sin-indice-1' // Cupresus sp (no está en el índice)
        },
        {
          plantaId: '27' // Phoenix canariensis
        }
      ]
    },
    {
      id: 'parada-3',
      numero: 3,
      ubicacionX: 280,
      ubicacionY: 150,
      plantas: [
        {
          plantaId: 'planta-sin-indice-2' // Pinus sp (no está en el índice)
        },
        {
          plantaId: 'planta-sin-indice-3' // Vitex agnus-castus (no está en el índice)
        }
      ]
    },
    {
      id: 'parada-4',
      numero: 4,
      ubicacionX: 170,
      ubicacionY: 250,
      plantas: [
        {
          plantaId: 'planta-sin-indice-4' // Eucalyptus sp. (no está en el índice)
        },
        {
          plantaId: 'planta-sin-indice-5' // Morus nigra (no está en el índice)
        }
      ]
    },
    {
      id: 'parada-5',
      numero: 5,
      ubicacionX: 240,
      ubicacionY: 210,
      plantas: [
        {
          plantaId: '12' // Gleditsia triacanthos
        },
        {
          plantaId: 'planta-sin-indice-6' // Robinia pseudoacacia (no está en el índice)
        }
      ]
    },
    {
      id: 'parada-6',
      numero: 6,
      ubicacionX: 190,
      ubicacionY: 170,
      plantas: [
        {
          plantaId: 'planta-sin-indice-7' // Pinus griffithi (no está en el índice)
        },
        {
          plantaId: 'planta-sin-indice-8' // Washingtonia sp. (no está en el índice)
        }
      ]
    },
    {
      id: 'parada-7',
      numero: 7,
      ubicacionX: 260,
      ubicacionY: 140,
      plantas: [
        {
          plantaId: '8' // Cedrus deodara
        },
        {
          plantaId: '7' // Casuarina cunninghamiana
        }
      ]
    },
    {
      id: 'parada-8',
      numero: 8,
      ubicacionX: 180,
      ubicacionY: 230,
      plantas: [
        {
          plantaId: 'planta-sin-indice-9' // Fraxinus sp. (no está en el índice)
        },
        {
          plantaId: 'planta-sin-indice-10' // Quercus suber (no está en el índice)
        }
      ]
    },
    {
      id: 'parada-9',
      numero: 9,
      ubicacionX: 220,
      ubicacionY: 200,
      plantas: [
        {
          plantaId: 'planta-sin-indice-11' // Magnolia grandiflora (no está en el índice)
        },
        {
          plantaId: '5' // Araucaria bidwilli
        }
      ]
    },
    {
      id: 'parada-10',
      numero: 10,
      ubicacionX: 200,
      ubicacionY: 160,
      plantas: [
        {
          plantaId: 'planta-sin-indice-12' // Schinus sp (no está en el índice)
        },
        {
          plantaId: 'planta-sin-indice-13' // Quercus robur (no está en el índice)
        }
      ]
    }
  ]
};

export default plazaIndependencia;