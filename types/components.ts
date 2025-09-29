// Tipos para los componentes de UI

export interface TopBarType {
  title: string;
  showBackButton: boolean;
  onBackPress?: () => void;
}

export interface NavBarType {
  activeItem: string;
}

export interface OpcionType {
  texto: string;
  id: string;
  onPress: () => void;
}

export interface VariantType {
  text: string;
  imgPath: string;
}