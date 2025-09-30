import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaItalia: Plaza = {
  id: 'plaza-italia',
  nombre: 'Plaza Italia',
  descripcion: 'La Plaza Italia es un espacio público importante en Mendoza que honra los vínculos históricos con Italia y su influencia en la cultura local. Se caracteriza por su vegetación típica y elementos decorativos distintivos.',
  bandera: '🇮🇹', // Bandera de Italia
  imagenPortada: require('../../assets/plazas/Modelo-PItalia.png'), // Usar una imagen existente temporalmente
  modeloImagenPath: require('../../assets/plazas/Modelo-PItalia.png'), // Usar una imagen existente temporalmente
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 280,
      ubicacionY: 150,
      plantas: [
        {
          plantaId: '42' // Trachycarpus fortunei
        },
        {
          plantaId: '8' // Casuarina cunninghamiana
        }
      ]
    },
    {
      id: 'parada-2',
      numero: 2,
      ubicacionX: 250,
      ubicacionY: 270,
      plantas: [
        {
          plantaId: '15' // Erythrina crista-galli
        },
        {
          plantaId: '31' // Phoenix canariensis
        }
      ]
    },
    {
      id: 'parada-3',
      numero: 3,
      ubicacionX: 250,
      ubicacionY: 320,
      plantas: [
        {
          plantaId: '14' // Evonimus japonicus
        },
        {
          plantaId: '22' // Liquidambar styraciflua
        }
      ]
    },
    {
      id: 'parada-4',
      numero: 4,
      ubicacionX: 130,
      ubicacionY: 320,
      plantas: [
        {
          plantaId: '9' // Cedrus deodara
        },
        {
          plantaId: '32' // Phytolacca dioica
        }
      ]
    },
    {
      id: 'parada-5',
      numero: 5,
      ubicacionX: 70,
      ubicacionY: 190,
      plantas: [
        {
          plantaId: '13' // Cupressus sp.
        },
        {
          plantaId: 'planta-sin-indice-5' // Brachychiton populneus (no está en el índice)
        }
      ]
    }
  ]
};

export default plazaItalia;