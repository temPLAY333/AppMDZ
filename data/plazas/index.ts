import { Plaza } from '../types';

// Importamos las plazas
import plazaSanMartin from './plazaSanMartin';
import plazaIndependencia from './plazaIndependencia';
import plazaItalia from './plazaItalia';
import plazaEspana from './plazaEspana';
import plazaChile from './plazaChile';

// Lista de todas las plazas
const plazas: Plaza[] = [
  plazaSanMartin,
  plazaIndependencia,
  plazaItalia,
  plazaEspana,
  plazaChile
];

// Objeto con las plazas indexadas por ID para acceso rápido
export const plazasPorId: Record<string, Plaza> = {};
plazas.forEach(plaza => {
  plazasPorId[plaza.id] = plaza;
});

export default plazas;