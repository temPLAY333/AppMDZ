import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaEspana: Plaza = {
  id: 'plaza-espana',
  nombre: 'Plaza España',
  descripcion: 'La Plaza España es un importante espacio público en Mendoza que representa los lazos históricos y culturales entre Argentina y España. Destaca por su fuente central y su vegetación mediterránea.',
  bandera: '🇪🇸', // Bandera de España
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
          plantaId: '27', // Phoenix canariensis (Palma Fénix)
        },
        {
          plantaId: 'planta-sin-indice-1', // Vitex agnus-castus (No está en el índice)
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
          plantaId: 'planta-sin-indice-2', // Platanus acerifolia (No está en el índice)
        },
        {
          plantaId: '14', // Jacaranda mimosifolia
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
          plantaId: '28', // Punica granatum (Granado)
        },
        {
          plantaId: 'planta-sin-indice-3' // Hibiscus rosa-sinensis (No está en el índice)
        }
      ]
    },
    {
      id: 'parada-4',
      numero: 4,
      ubicacionX: 190,
      ubicacionY: 230,
      plantas: [
        {
          plantaId: '14' // Jacaranda mimosifolia
        },
        {
          plantaId: '27' // Phoenix canariensis (Palma Fénix)
        }
      ]
    },
    {
      id: 'parada-5',
      numero: 5,
      ubicacionX: 130,
      ubicacionY: 190,
      plantas: [
        {
          plantaId: '28' // Punica granatum (Granado)
        },
        {
          plantaId: 'planta-sin-indice-1' // Vitex agnus-castus (No está en el índice)
        }
      ]
    }
  ]
};

export default plazaEspana;