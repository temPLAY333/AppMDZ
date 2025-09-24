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

// Función para expandir los datos de plantas en una parada
export const obtenerPlantasEnParada = (parada: Parada): Planta[] => {
  return parada.plantas.map(plantaEnParada => {
    const planta = plantasPorId[plantaEnParada.plantaId];
    
    if (!planta) {
      throw new Error(`No se encontró la planta con ID: ${plantaEnParada.plantaId}`);
    }
    
    return planta;
  });
};

// Tipo para la planta con su ubicación específica en la parada
export interface PlantaConUbicacion extends Planta {
  ubicacionEspecifica?: string;
}

// Función para obtener plantas con su información de ubicación específica
export const obtenerPlantasConUbicacion = (parada: Parada): PlantaConUbicacion[] => {
  return parada.plantas.map(plantaEnParada => {
    const planta = plantasPorId[plantaEnParada.plantaId];
    
    if (!planta) {
      throw new Error(`No se encontró la planta con ID: ${plantaEnParada.plantaId}`);
    }
    
    return {
      ...planta,
      ubicacionEspecifica: plantaEnParada.ubicacionEspecifica
    };
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