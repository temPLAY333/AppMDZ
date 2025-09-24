import { BancoPreguntas } from './types';

// Importamos los bancos de preguntas
import preguntasPlazaSanMartin from './preguntas/preguntasPlazaSanMartin';
// Aquí importarías el resto de bancos de preguntas cuando los crees

// Lista de todos los bancos de preguntas
const bancosPreguntas: BancoPreguntas[] = [
  preguntasPlazaSanMartin,
  // Aquí agregarías el resto de bancos de preguntas
];

// Exportamos un objeto con todos los bancos de preguntas indexados por ID de plaza para acceso rápido
export const preguntasPorPlazaId: Record<string, BancoPreguntas> = {};
bancosPreguntas.forEach(banco => {
  preguntasPorPlazaId[banco.plazaId] = banco;
});

export default bancosPreguntas;