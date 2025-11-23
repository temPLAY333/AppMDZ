/* Fonts */
export const FontFamily = {
  interRegular: "Inter-Regular",
  interExtraBold: "Inter-ExtraBold",
  interBold: "Inter-Bold",
};
/* Font sizes */
export const FontSize = {
  size_sm: 14,
  size_md: 16,
  size_lg: 18,
  size_20: 20,
  size_24: 24,
  size_32: 32,
  size_36: 36,
  size_40: 40,
  size_48: 48,
  size_64: 64,
};
/* Colors - Sistema de tokens centralizado */
export const Color = {
  // Colores base
  colorBlack: "#000",
  colorWhite: "#fff",
  
  // Paleta principal (Blues/Cyans)
  colorDarkcyan: "#018b9f",
  colorSteelblue: "#10668a",
  colorSteelblueDark: "#0A4A5E",
  colorCyan: "#19A4DF",
  colorCyanLight: "rgba(25, 164, 223, 0.25)",
  colorCyanTransparent: "rgba(25, 164, 223, 0)",
  
  // Grises y fondos oscuros
  colorGray300: "rgba(0, 0, 0, 0.25)",
  colorGray200: "#05181f",
  colorGray100: "#05222e",
  colorGrayOverlay: "rgba(0, 0, 0, 0.55)",
  colorGrayOverlayLight: "rgba(0, 0, 0, 0.2)",
  colorGrayOverlayMedium: "rgba(0, 0, 0, 0.15)",
  
  // Verde (Success/Nature)
  colorYellowgreen: "#8dbf2f",
  colorSuccess: "#8dbf2f",
  colorSuccessBorder: "#7ab029",
  colorSuccessLight: "rgba(141, 191, 47, 0.28)",
  colorNatureAccent: "#A6D451",
  
  // Rojo (Danger/Error)
  colorDanger: "#c7392b",
  colorDangerBorder: "#b13024",
  colorDangerLight: "rgba(199, 57, 43, 0.35)",
  
  // Aliases semánticos para componentes
  primary: "#018b9f",
  primaryDark: "#10668a",
  primaryLight: "#e1f5f7",
  secondary: "#019B9F",
  accent: "#19A4DF",
  
  // Texto
  textPrimary: "#fff",
  textSecondary: "rgba(255, 255, 255, 0.7)",
  textDark: "#333333",
  
  // Bordes
  borderLight: "#dee2e6",
  borderAccent: "#A6D451",
  
  // Fondos
  backgroundDark: "#05181f",
  backgroundDarker: "#05222e",
  backgroundLight: "#f8f9fa",
  backgroundInfo: "#e2f3f5",
  
  // Estados de interacción
  interactionRipple: "rgba(255, 255, 255, 0.15)",
  interactionRippleLight: "rgba(255, 255, 255, 0.12)",
  
  // Sombras
  shadowColor: "#000",
  
  // Compatibilidad (mantener nombres antiguos)
  white: "#ffffff",
};
/* Gaps */
export const Gap = {
  gap_10: 10,
  gap_19: 19,
  gap_22: 22,
  gap_30: 30,
  gap_60: 60,
};
/* Paddings */
export const Padding = {
  p_8: 8,
  p_10: 10,
  p_12: 12,
  p_15: 15,
  p_18: 18,
  p_19: 19,
  p_22: 22,
  p_36: 36,
};
/* border radiuses */
export const Border = {
  br_3: 3,
  br_4: 4,
  br_5: 5,
  br_10: 10,
  br_40: 40,
  br_100: 100,
  br_sm: 8,
  br_md: 12,
};