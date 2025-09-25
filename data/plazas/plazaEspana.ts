import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaEspana: Plaza = {
  id: 'plaza-espana',
  nombre: 'Plaza España',
  descripcion: 'La Plaza España es un importante espacio público en Mendoza que representa los lazos históricos y culturales entre Argentina y España. Destaca por su fuente central y su vegetación mediterránea.',
  bandera: '🇪🇸', // Bandera de España
  imagenPortada: require('../../assets/BP-Social-YouthClimateActionFund.png'), // Usar una imagen existente temporalmente
  mapaImagenPath: require('../../assets/BP-Social-YouthClimateActionFund.png'), // Usar una imagen existente temporalmente
  modeloImagenPath: require('../../assets/BP-Youth-Climate-Action-Fund-Logo-Options-040824-V1-FNL-YCAF-Logo-with-Tagline-as-Outlined-Text-White.png'), // Usar una imagen existente temporalmente
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 150,
      ubicacionY: 120,
      plantas: [
        {
          plantaId: '27', // Phoenix canariensis (Palma Fénix)
          ubicacionEspecifica: 'Sector noreste de la plaza'
        },
        {
          plantaId: 'planta-sin-indice-1', // Vitex agnus-castus (No está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Sauzgatillo (Vitex agnus-castus)'
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
          ubicacionEspecifica: 'Planta SIN INDICE - Plátano (Platanus acerifolia)'
        },
        {
          plantaId: '14', // Jacaranda mimosifolia
          ubicacionEspecifica: 'Lado oeste de la plaza, formando una alineación'
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
          ubicacionEspecifica: 'Sector sureste, cerca del monumento'
        },
        {
          plantaId: 'planta-sin-indice-3', // Hibiscus rosa-sinensis (No está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Hibisco (Hibiscus rosa-sinensis)'
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
          plantaId: '14', // Jacaranda mimosifolia
          ubicacionEspecifica: 'Esquina sur de la plaza'
        },
        {
          plantaId: '27', // Phoenix canariensis (Palma Fénix)
          ubicacionEspecifica: 'Centro de la plaza, junto a la fuente'
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
          plantaId: '28', // Punica granatum (Granado)
          ubicacionEspecifica: 'Sector oeste, cerca de los bancos'
        },
        {
          plantaId: 'planta-sin-indice-1', // Vitex agnus-castus (No está en el índice)
          ubicacionEspecifica: 'Planta SIN INDICE - Sauzgatillo (Vitex agnus-castus)'
        }
      ]
    }
  ]
};

export default plazaEspana;