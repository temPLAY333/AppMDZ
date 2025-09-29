import { BancoPreguntas } from '../types';

// Importamos los bancos de preguntas
import nuevasPlazaSanMartin from './nuevasPlazaSanMartin';
import bancoPlazaEspana from './bancoPlazaEspana';
import bancoPlazaItalia from './bancoPlazaItalia';
import bancoPlazaChile from './bancoPlazaChile';
import bancoPlazaIndependencia from './bancoPlazaIndependencia';

const bancosPreguntas: BancoPreguntas[] = [
  nuevasPlazaSanMartin,
  bancoPlazaEspana,
  bancoPlazaItalia,
  bancoPlazaChile,
  bancoPlazaIndependencia,
];

// Objeto con los bancos de preguntas indexados por ID de plaza para acceso rápido
export const preguntasPorPlazaId: Record<string, BancoPreguntas> = {};
bancosPreguntas.forEach(banco => {
  preguntasPorPlazaId[banco.plazaId] = banco;
});

export default bancosPreguntas;