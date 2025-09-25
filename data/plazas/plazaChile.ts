import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaChile: Plaza = {
  id: 'plaza-chile',
  nombre: 'Plaza Chile',
  descripcion: 'La Plaza Chile es un espacio dedicado a fortalecer los lazos de hermandad entre Argentina y Chile. Esta plaza representa la amistad entre ambas naciones y contiene especies vegetales representativas.',
  bandera: '🇨🇱', // Bandera de Chile
  imagenPortada: require('../../assets/CiudadDeMDZ.png'), // Usar una imagen existente temporalmente
  mapaImagenPath: require('../../assets/CiudadDeMDZ.png'), // Usar una imagen existente temporalmente
  modeloImagenPath: require('../../assets/Modelo-PSanMartin.png'), // Usar una imagen existente temporalmente
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 150,
      ubicacionY: 120,
      plantas: [
        {
          plantaId: '8', // Cedrus deodara
          ubicacionEspecifica: 'Entrada principal de la plaza'
        },
        {
          plantaId: 'planta-sin-indice-1', // Pinus griffithi (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Pino del Himalaya (Pinus griffithi)'
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
          plantaId: 'planta-sin-indice-2', // Eucalyptus sp. (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Eucalipto (Eucalyptus sp.)'
        },
        {
          plantaId: 'planta-sin-indice-3', // Cocculus laurifolius (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Laurel de la India (Cocculus laurifolius)'
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
          plantaId: 'planta-sin-indice-4', // Tilia cordata (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Tilo (Tilia cordata)'
        },
        {
          plantaId: '27', // Phoenix canariensis
          ubicacionEspecifica: 'Centro de la plaza, cerca de la fuente'
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
          plantaId: 'planta-sin-indice-5', // Neltuma sp. (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Algarrobo (Neltuma sp.)'
        },
        {
          plantaId: '19', // Ligustrum lucidum
          ubicacionEspecifica: 'Área perimetral de la plaza'
        }
      ]
    },
    {
      id: 'parada-5',
      numero: 5,
      ubicacionX: 230,
      ubicacionY: 120,
      plantas: [
        {
          plantaId: 'planta-sin-indice-6', // Schinus sp. (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Aguaribay (Schinus sp.)'
        },
        {
          plantaId: '12', // Gleditsia triacanthos
          ubicacionEspecifica: 'Sector sur de la plaza'
        }
      ]
    }
  ]
};

export default plazaChile;