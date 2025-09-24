// Tipos para la estructura de datos de la aplicación

// Tipos de emojis de referencia para plantas
export enum EmojiReferencia {
  Naturalizada = "🌲",
  UsoEconomico = "🪵",
  ResistenteSequia = "💧",
  Exotica = "🌳",
  ResistenteFrio = "❄️",
  ResistenteSueloSalino = "🌱"
}

// Descripciones multilingües
export interface DescripcionesPlanta {
  es: string; // Descripción en español
  en: string; // Descripción en inglés
}

// Atributos de una planta
export interface PlantaAtributos {
  nombre: string;
  nombreCientifico: string;
  descripcionesMultilingue: DescripcionesPlanta; // Descripciones en diferentes idiomas (requerido)
  imagenPath: string;  // Ruta a la imagen en /assets
  referencias: EmojiReferencia[];  // Lista de referencias (máximo 4 de los 7 disponibles)
}

// Estructura de una planta
export interface Planta {
  id: string;
  atributos: PlantaAtributos;
}

// Estructura de planta en una parada (referencia a una planta del catálogo)
export interface PlantaEnParada {
  plantaId: string;  // Referencia al ID de la planta en el catálogo
  ubicacionEspecifica?: string;  // Información específica de ubicación dentro de la parada (opcional)
}

// Estructura de una parada
export interface Parada {
  id: string;
  numero: number;  // Solo número, van por orden
  ubicacionX: number;  // Coordenadas para el mapa
  ubicacionY: number;
  plantas: PlantaEnParada[];  // Referencias a plantas del catálogo
}

// Estructura de una plaza
export interface Plaza {
  id: string;
  nombre: string;
  descripcion: string;
  bandera: string;     // Emoji de la bandera del país
  imagenPortada: string;
  mapaImagenPath: string;
  modeloImagenPath: string;
  paradas: Parada[];
}

// Estructura para preguntas
export interface Opcion {
  texto: string;
  esCorrecta: boolean;
}

export interface Pregunta {
  id: string;
  texto: string;
  opciones: Opcion[];
  explicacion: string;  // Explicación de la respuesta correcta
}

export interface BancoPreguntas {
  plazaId: string;
  preguntas: Pregunta[];
}