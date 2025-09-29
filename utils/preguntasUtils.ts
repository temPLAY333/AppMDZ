import { BancoPreguntas, Pregunta } from '../data/types';
import { preguntasPorPlazaId } from '../data/preguntas/index';

// Obtener el banco de preguntas para una plaza específica
export const getBancoPreguntas = (plazaId: string): BancoPreguntas | undefined => {
  return preguntasPorPlazaId[plazaId];
};

// Obtener preguntas aleatorias de un banco específico
export const getPreguntasAleatorias = (plazaId: string, cantidad: number): Pregunta[] => {
  console.log("Buscando banco de preguntas para plazaId:", plazaId);
  console.log("Bancos disponibles:", Object.keys(preguntasPorPlazaId));
  
  const banco = getBancoPreguntas(plazaId);
  console.log("Banco encontrado:", banco ? "SÍ" : "NO", banco);
  
  if (!banco || !banco.preguntas || banco.preguntas.length === 0) {
    console.warn(`No se encontraron preguntas para la plaza ${plazaId}`);
    return [];
  }

  // Si hay menos preguntas disponibles que la cantidad solicitada, devolver todas
  if (banco.preguntas.length <= cantidad) {
    return [...banco.preguntas];
  }

  // Seleccionar preguntas aleatorias
  const preguntasDisponibles = [...banco.preguntas];
  const preguntasSeleccionadas: Pregunta[] = [];
  
  for (let i = 0; i < cantidad; i++) {
    const indiceAleatorio = Math.floor(Math.random() * preguntasDisponibles.length);
    preguntasSeleccionadas.push(preguntasDisponibles[indiceAleatorio]);
    preguntasDisponibles.splice(indiceAleatorio, 1);
  }
  
  return preguntasSeleccionadas;
};

// Obtener texto localizado de una pregunta según el idioma especificado
export const getTextoLocalizado = (texto: { es: string; en: string }, idioma: 'es' | 'en' = 'es'): string => {
  return idioma === 'en' ? texto.en : texto.es;
};

// Comprobar si una respuesta es correcta
export const esRespuestaCorrecta = (pregunta: Pregunta, indiceRespuesta: number): boolean => {
  if (!pregunta || !pregunta.opciones || indiceRespuesta < 0 || indiceRespuesta >= pregunta.opciones.length) {
    return false;
  }
  
  return pregunta.opciones[indiceRespuesta].esCorrecta;
};

export default {
  getBancoPreguntas,
  getPreguntasAleatorias,
  getTextoLocalizado,
  esRespuestaCorrecta
};