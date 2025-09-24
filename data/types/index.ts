/**
 * Tipos de datos usados en la aplicación
 */

export enum EmojiReferencia {
  Exotica = "Exótica",
  Naturalizada = "Naturalizada",
  UsoEconomico = "Uso Económico",
  ResistenteFrio = "Resistente al Frío",
  ResistenteSequia = "Resistente a la Sequía",
  ResistenteSueloSalino = "Resistente a Suelo Salino"
}

export interface PlantaDescripcion {
  es: string;
  en: string;
}

export interface PlantaAtributos {
  nombre: string;
  nombreCientifico: string;
  descripcionesMultilingue: PlantaDescripcion;
  imagenPath: any;
  referencias: EmojiReferencia[];
}

export interface Planta {
  id: string;
  atributos: PlantaAtributos;
}