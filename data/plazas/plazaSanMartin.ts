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
          plantaId: '1', // Acacia Negra
          ubicacionEspecifica: 'Sector norte de la plaza'
        },
        {
          plantaId: '2', // Acacia Negra
          ubicacionEspecifica: 'Cerca de la entrada principal'
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
          plantaId: '5', // Palo Borracho
          ubicacionEspecifica: 'Sector central, junto al monumento'
        },
        {
          plantaId: '33', // Washingtonia robusta 
          ubicacionEspecifica: 'Cerca de los bancos del sector este'
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
          plantaId: '5', // Araucaria bidwilli 
          ubicacionEspecifica: 'Sector sur de la plaza'
        },
        {
          plantaId: '19', // Ligustro
          ubicacionEspecifica: 'Formando parte del cerco perimetral'
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
          plantaId: '22', // Morera
          ubicacionEspecifica: 'Área recreativa oeste'
        },
        {
          plantaId: '26', // Plátano
          ubicacionEspecifica: 'Junto al sendero principal'
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
          plantaId: '27', // Palma Fénix
          ubicacionEspecifica: 'Sector noreste de la plaza'
        },
        {
          plantaId: '33', // Palmera Abanico
          ubicacionEspecifica: 'Bordeando la fuente decorativa'
        }
      ]
    }
  ]
};

export default plazaSanMartin;