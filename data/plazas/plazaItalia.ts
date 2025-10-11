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
      ubicacionX: 2000,
      ubicacionY: 800,
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
      ubicacionX: 1900,
      ubicacionY: 1450,
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
      ubicacionX: 1850,
      ubicacionY: 1850,
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
      ubicacionX: 800,
      ubicacionY: 2000,
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
      ubicacionX: 550,
      ubicacionY: 850,
      plantas: [
        {
          plantaId: '13' // Cupressus sp.
        },
        {
          plantaId: '47' // Brachychiton populneus
        }
      ]
    }
  ]
};

export default plazaItalia;