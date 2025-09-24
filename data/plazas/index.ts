import { Plaza } from '../types';

// Importamos las plazas
import plazaSanMartin from './plazaSanMartin';

// Lista de todas las plazas
const plazas: Plaza[] = [
  plazaSanMartin,
  // Aquí se pueden agregar más plazas
];

// Objeto con las plazas indexadas por ID para acceso rápido
export const plazasPorId: Record<string, Plaza> = {};
plazas.forEach(plaza => {
  plazasPorId[plaza.id] = plaza;
});

export default plazas;