import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaIndependencia: Plaza = {
  id: 'plaza-independencia',
  nombre: 'Plaza Independencia',
  descripcion: 'La Plaza Independencia es la plaza principal de Mendoza, ubicada en el centro de la ciudad. Fue diseñada después del terremoto de 1861 y representa el corazón cívico y cultural de la ciudad, con una gran variedad de especies vegetales.',
  bandera: '🇦🇷', // Bandera de Argentina
  imagenPortada: require('../../assets/BP-Social-YouthClimateActionFund-1@3x.png'), // Usar una imagen existente temporalmente
  mapaImagenPath: require('../../assets/BP-Social-YouthClimateActionFund-1@3x.png'), // Usar una imagen existente temporalmente
  modeloImagenPath: require('../../assets/Modelo-PSanMartin-1@3x.png'), // Usar una imagen existente temporalmente
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 150,
      ubicacionY: 120,
      plantas: [
        {
          plantaId: '29', // Tipuana tipu
          ubicacionEspecifica: 'Entrada principal, sector norte de la plaza'
        },
        {
          plantaId: '1', // Acacia visco
          ubicacionEspecifica: 'Cerca del monumento central'
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
          plantaId: 'planta-sin-indice-1', // Cupresus sp (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Ciprés (Cupresus sp)'
        },
        {
          plantaId: '27', // Phoenix canariensis
          ubicacionEspecifica: 'Alineaciones centrales de la plaza'
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
          plantaId: 'planta-sin-indice-2', // Pinus sp (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Pino (Pinus sp)'
        },
        {
          plantaId: 'planta-sin-indice-3', // Vitex agnus-castus (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Sauzgatillo (Vitex agnus-castus)'
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
          plantaId: 'planta-sin-indice-4', // Eucalyptus sp. (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Eucalipto (Eucalyptus sp.)'
        },
        {
          plantaId: 'planta-sin-indice-5', // Morus nigra (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Morera (Morus nigra)'
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
          plantaId: '12', // Gleditsia triacanthos
          ubicacionEspecifica: 'Sector sur de la plaza'
        },
        {
          plantaId: 'planta-sin-indice-6', // Robinia pseudoacacia (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Acacia blanca (Robinia pseudoacacia)'
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
          plantaId: 'planta-sin-indice-7', // Pinus griffithi (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Pino del Himalaya (Pinus griffithi)'
        },
        {
          plantaId: 'planta-sin-indice-8', // Washingtonia sp. (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Palmera de abanico (Washingtonia sp.)'
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
          plantaId: '8', // Cedrus deodara
          ubicacionEspecifica: 'Sector noreste de la plaza'
        },
        {
          plantaId: '7', // Casuarina cunninghamiana
          ubicacionEspecifica: 'Cerca de la fuente ornamental'
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
          plantaId: 'planta-sin-indice-9', // Fraxinus sp. (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Fresno (Fraxinus sp.)'
        },
        {
          plantaId: 'planta-sin-indice-10', // Quercus suber (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Alcornoque (Quercus suber)'
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
          plantaId: 'planta-sin-indice-11', // Magnolia grandiflora (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Magnolia (Magnolia grandiflora)'
        },
        {
          plantaId: '5', // Araucaria bidwilli
          ubicacionEspecifica: 'Centro-este de la plaza'
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
          plantaId: 'planta-sin-indice-12', // Schinus sp (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Aguaribay (Schinus sp)'
        },
        {
          plantaId: 'planta-sin-indice-13', // Quercus robur (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Roble (Quercus robur)'
        }
      ]
    }
  ]
};

export default plazaIndependencia;