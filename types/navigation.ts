import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Definir los parámetros para cada ruta
export type RootStackParamList = {
  Home: undefined;
  Idioma: undefined;
  MenuPlaza: { plazaId?: string };
  MapaDeLaPlaza: { plazaId: string };
  ParadaPlanta1: { paradaId: string; plazaId: string };
  DetallePlanta: { plantaId: string; plazaId?: string; paradaId?: string };
  JuegosPregunta1: { plazaId: string };
  Revision: { plazaId: string; respuestas: { [key: string]: string }; preguntas: any[]; modo: string };
  InformacionAdicional: undefined;
  Referencias: undefined;
  Glosario: undefined;
  LoadScreen: undefined;
};

// Tipo para navegación en las pantallas
export type AppNavigationProp<T extends keyof RootStackParamList> = 
  StackNavigationProp<RootStackParamList, T>;

// Tipo para las propiedades de ruta
export type AppRouteProp<T extends keyof RootStackParamList> = 
  RouteProp<RootStackParamList, T>;

// Tipo para props de componente con navegación y ruta
export interface ScreenProps<T extends keyof RootStackParamList> {
  navigation: AppNavigationProp<T>;
  route: AppRouteProp<T>;
}