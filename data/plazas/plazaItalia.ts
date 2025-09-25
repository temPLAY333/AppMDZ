import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaItalia: Plaza = {
  id: 'plaza-italia',
  nombre: 'Plaza Italia',
  descripcion: 'La Plaza Italia es un espacio público importante en Mendoza que honra los vínculos históricos con Italia y su influencia en la cultura local. Se caracteriza por su vegetación típica y elementos decorativos distintivos.',
  bandera: '🇮🇹', // Bandera de Italia
  imagenPortada: require('../../assets/CiudadDeMDZ.png'), // Usar una imagen existente temporalmente
  mapaImagenPath: require('../../assets/CiudadDeMDZ.png'), // Usar una imagen existente temporalmente
  modeloImagenPath: require('../../assets/CiudadDeMDZ.png'), // Usar una imagen existente temporalmente
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 150,
      ubicacionY: 120,
      plantas: [
        {
          plantaId: 'planta-sin-indice-1' // Trachicarpus fortunei (no está en el índice)
        },
        {
          plantaId: '7' // Casuarina cunninghamiana
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
          plantaId: '10' // Erythrina crista-galli
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
          plantaId: 'planta-sin-indice-2' // Evonimus europaeus (no está en el índice)
        },
        {
          plantaId: '17' // Liquidambar styraciflua
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
          plantaId: '8' // Cedrus deodara
        },
        {
          plantaId: 'planta-sin-indice-3' // Phytolaca dioica (no está en el índice)
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
          plantaId: 'planta-sin-indice-4' // Cupressus sp. (no está en el índice)
        },
        {
          plantaId: 'planta-sin-indice-5' // Brachychiton populneus (no está en el índice)
        }
      ]
    }
  ]
};

export default plazaItalia;