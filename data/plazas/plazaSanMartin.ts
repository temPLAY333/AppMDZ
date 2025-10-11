import { Plaza } from '../types';

// Importamos las plantas desde el catálogo centralizado
import { plantasPorId } from '../plantas';

const plazaSanMartin: Plaza = {
  id: 'plaza-san-martin',
  nombre: 'Plaza San Martin',
  descripcion: 'La Plaza San Martín es una de las plazas más importantes de Mendoza, ubicada en el centro de la ciudad. Honra al General José de San Martín, héroe de la independencia argentina.',
  bandera: '🎖️', // Medalla como símbolo para San Martín
  imagenPortada: require('../../assets/plazas/Modelo-PSanMartin.png'),
  modeloImagenPath: require('../../assets/plazas/Modelo-PSanMartin.png'),
  paradas: [
    {
      id: 'parada-1',
      numero: 1,
      ubicacionX: 2100,
      ubicacionY: 500,
      plantas: [
        {
          plantaId: '36' // Robinia pseudoacacia
        },
        {
          plantaId: '30' // Platanus x acerifolia
        }
      ]
    },
    {
      id: 'parada-2',
      numero: 2,
      ubicacionX: 1800,
      ubicacionY: 1600,
      plantas: [
        {
          plantaId: '46' // Salix nigra
        },
        {
          plantaId: '43' // Washingtonia robusta
        }
      ]
    },
    {
      id: 'parada-3',
      numero: 3,
      ubicacionX: 2100,
      ubicacionY: 2100,
      plantas: [
        {
          plantaId: '5' // Araucaria bidwilli 
        },
        {
          plantaId: '38' //  Syagrus romanzoffiana  
        }
      ]
    },
    {
      id: 'parada-4',
      numero: 4,
      ubicacionX: 1500,
      ubicacionY: 1900,
      plantas: [
        {
          plantaId: '31' // Phoenix canariensis
        },
        {
          plantaId: '19' // Jacaranda mimosifolia 
        }
      ]
    },
    {
      id: 'parada-5',
      numero: 5,
      ubicacionX: 300,
      ubicacionY: 700,
      plantas: [
        {
          plantaId: '2' // Acacia melanoxylon
        },
        {
          plantaId: '9' // Cedrus deodara 
        }
      ]
    }
  ]
};

export default plazaSanMartin;