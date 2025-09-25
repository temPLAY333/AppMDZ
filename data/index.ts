// Exportamos los tipos
export * from './types';
import { Planta, Parada, PlantaEnParada } from './types';

// Exportamos los datos de plantas
import plantas, { plantasPorId } from './plantas';
export { plantas, plantasPorId };

// Exportamos los datos de plazas
import plazas, { plazasPorId } from './plazas';
export { plazas, plazasPorId };

// Exportamos los datos de preguntas
import bancosPreguntas, { preguntasPorPlazaId } from './preguntas';
export { bancosPreguntas, preguntasPorPlazaId };

// Función de utilidad para obtener todos los datos de una plaza incluyendo sus preguntas
export const obtenerDatosPlazaCompletos = (plazaId: string) => {
  const plaza = plazasPorId[plazaId];
  const preguntas = preguntasPorPlazaId[plazaId];
  
  if (!plaza) {
    throw new Error(`No se encontró la plaza con ID: ${plazaId}`);
  }
  
  return {
    plaza,
    preguntas: preguntas?.preguntas || []
  };
};

// Función para obtener una planta específica
export const obtenerPlanta = (plantaId: string): Planta => {
  const planta = plantasPorId[plantaId];
  
  if (!planta) {
    throw new Error(`No se encontró la planta con ID: ${plantaId}`);
  }
  
  return planta;
};

// Función para obtener plantas en una parada
export const obtenerPlantasEnParada = (parada: Parada): Planta[] => {
  console.log('Procesando parada:', parada.id, 'con plantas:', JSON.stringify(parada.plantas));
  
  if (!parada.plantas || parada.plantas.length === 0) {
    console.warn('La parada no tiene plantas asociadas');
    return [];
  }
  
  return parada.plantas.map(plantaEnParada => {
    const planta = plantasPorId[plantaEnParada.plantaId];
    
    if (!planta) {
      console.error(`No se encontró la planta con ID: ${plantaEnParada.plantaId}`);
      throw new Error(`No se encontró la planta con ID: ${plantaEnParada.plantaId}`);
    }
    
    return planta;
  });
};

// Función para buscar plantas por nombre o nombre científico
export const buscarPlantas = (termino: string): Planta[] => {
  const terminoMinuscula = termino.toLowerCase();
  return plantas.filter(planta => 
    planta.atributos.nombre.toLowerCase().includes(terminoMinuscula) || 
    planta.atributos.nombreCientifico.toLowerCase().includes(terminoMinuscula)
  );
};