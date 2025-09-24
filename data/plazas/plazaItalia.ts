import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaItalia: Plaza = {
  id: 'plaza-italia',
  nombre: 'Plaza Italia',
  descripcion: 'La Plaza Italia es un espacio público importante en Mendoza que honra los vínculos históricos con Italia y su influencia en la cultura local. Se caracteriza por su vegetación típica y elementos decorativos distintivos.',
  bandera: '🇮🇹', // Bandera de Italia
  imagenPortada: require('../../assets/image-1@3x.png'), // Usar una imagen existente temporalmente
  mapaImagenPath: require('../../assets/image-1@3x.png'), // Usar una imagen existente temporalmente
  modeloImagenPath: require('../../assets/image-3@3x.png'), // Usar una imagen existente temporalmente
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 150,
      ubicacionY: 120,
      plantas: [
        {
          plantaId: 'planta-sin-indice-1', // Trachicarpus fortunei (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Palmito (Trachicarpus fortunei)'
        },
        {
          plantaId: '7', // Casuarina cunninghamiana
          ubicacionEspecifica: 'Sector norte de la plaza'
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
          plantaId: '10', // Erythrina crista-galli
          ubicacionEspecifica: 'Área central, cerca del monumento principal'
        },
        {
          plantaId: '27', // Phoenix canariensis
          ubicacionEspecifica: 'Lado sur, formando parte de la ornamentación principal'
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
          plantaId: 'planta-sin-indice-2', // Evonimus europaeus (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Bonetero (Evonimus europaeus)'
        },
        {
          plantaId: '17', // Liquidambar styraciflua
          ubicacionEspecifica: 'Área este de la plaza, junto a los senderos'
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
          plantaId: '8', // Cedrus deodara
          ubicacionEspecifica: 'Esquina noroeste de la plaza'
        },
        {
          plantaId: 'planta-sin-indice-3', // Phytolaca dioica (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Ombú (Phytolaca dioica)'
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
          plantaId: 'planta-sin-indice-4', // Cupressus sp. (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Ciprés (Cupressus sp.)'
        },
        {
          plantaId: 'planta-sin-indice-5', // Brachychiton populneus (no está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Braquiquito (Brachychiton populneus)'
        }
      ]
    }
  ]
};

export default plazaItalia;