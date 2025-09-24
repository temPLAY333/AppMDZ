import { Plaza } from './types';

// Importamos los datos de cada plaza
import plazaChile from './plazas/plazaChile';
import plazaEspana from './plazas/plazaEspana';
import plazaIndependencia from './plazas/plazaIndependencia';
import plazaItalia from './plazas/plazaItalia';
import plazaSanMartin from './plazas/plazaSanMartin';

// Lista completa de plazas
const plazas: Plaza[] = [
  plazaChile,
  plazaEspana,
  plazaIndependencia,
  plazaItalia,
  plazaSanMartin
];

// Exportamos un objeto con todas las plazas indexadas por ID para acceso rápido
export const plazasPorId: Record<string, Plaza> = {};
plazas.forEach(plaza => {
  plazasPorId[plaza.id] = plaza;
});

export default plazas;