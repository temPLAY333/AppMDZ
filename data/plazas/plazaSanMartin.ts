import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaSanMartin: Plaza = {
  id: 'plaza-san-martin',
  nombre: 'Plaza San Martin',
  descripcion: 'La Plaza San Martín es una de las plazas más importantes de Mendoza, ubicada en el centro de la ciudad. Honra al General José de San Martín, héroe de la independencia argentina.',
  bandera: '🎖️', // Medalla como símbolo para San Martín
  imagenPortada: require('../../assets/PSanMartin-Aerea-Normal.png'),
  mapaImagenPath: require('../../assets/PSanMartin-Aerea-Normal.png'),
  modeloImagenPath: require('../../assets/Modelo-PSanMartin.png'),
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 120,
      ubicacionY: 100,
      plantas: [
        {
          plantaId: '1' // Viscote
        },
        {
          plantaId: '2' // Acacia Negra
        }
      ]
    },
    {
      id: 'parada-2',
      numero: 2,
      ubicacionX: 200,
      ubicacionY: 150,
      plantas: [
        {
          plantaId: '5' // Araucaria Austrailiana
        },
        {
          plantaId: '33' // Palmera Abanico
        }
      ]
    },
    {
      id: 'parada-3',
      numero: 3,
      ubicacionX: 280,
      ubicacionY: 200,
      plantas: [
        {
          plantaId: '5' // Araucaria Austrailiana 
        },
        {
          plantaId: '19' // Ligustro
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
          plantaId: '22' // Morera
        },
        {
          plantaId: '26' // Plátano
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
          plantaId: '27' // Palma Fénix
        },
        {
          plantaId: '33' // Palmera Abanico
        }
      ]
    }
  ]
};

export default plazaSanMartin;