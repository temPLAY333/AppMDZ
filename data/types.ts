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
  imagenPath?: string;  // Ruta opcional - se genera dinámicamente si no existe
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
}

// Estructura de una parada
export interface Parada {
  id: string;
  numero: number;  // Solo número, van por orden
  ubicacionX: number;  // Coordenadas para el mapa
  ubicacionY: number;
  modeloX?: number;  // Coordenadas opcionales específicas para el modelo 3D
  modeloY?: number;  // Si no se especifican, se usan las mismas del mapa
  plantas: PlantaEnParada[];  // Referencias a plantas del catálogo
}

// Estructura de una plaza
export interface Plaza {
  id: string;
  nombre: string;
  descripcion: string;
  bandera: string;     // Emoji de la bandera del país
  imagenPortada: string;
  modeloImagenPath: string;  // Solo mantenemos la referencia al modelo 3D
  paradas: Parada[];
}

// Textos multilingües para preguntas y opciones
export interface TextoMultilingue {
  es: string; // Texto en español
  en: string; // Texto en inglés
}

// Estructura para preguntas
export interface Opcion {
  texto: TextoMultilingue;
  esCorrecta: boolean;
}

export interface Pregunta {
  id: string;
  texto: TextoMultilingue;
  imagen?: string;     // Ruta opcional a una imagen para la pregunta
  plantaId?: string;   // ID opcional de la planta asociada a la pregunta
  opciones: Opcion[];
  explicacion: TextoMultilingue;  // Explicación de la respuesta correcta
  // Orden de las opciones tal como se mostraron al usuario (índices originales tras barajar)
  ordenOpciones?: number[];
}

export interface BancoPreguntas {
  plazaId: string;
  preguntas: Pregunta[];
}