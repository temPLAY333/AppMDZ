import React, { useState, useEffect } from "react";
import { Pressable, Text, StyleSheet, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Color,
  FontFamily,
  Border,
  Padding,
  Gap,
  FontSize,
} from "../GlobalStyles";

export type ItemType = {
  /** Texto principal a mostrar */
  text: string;
  
  /** Emoji o icono a mostrar (opcional) */
  emoji?: string;
  
  /** Indica si el elemento está seleccionado/activo */
  isSelected?: boolean;
  
  /** Función a ejecutar al presionar el elemento */
  onPress?: () => void;
  
  /** Tamaño de la fuente del texto principal (opcional) */
  textSize?: number;
  
  /** Tamaño de la fuente del emoji (opcional) */
  emojiSize?: number;
  
  /** Altura personalizada para el item (opcional) */
  height?: number;
  
  /** Ancho personalizado para el item (opcional) */
  width?: number | string;
  
  /** Estilo adicional para el contenedor (opcional) */
  style?: ViewStyle;
};

const Item = ({
  text,
  emoji,
  isSelected = false,
  onPress,
  textSize = FontSize.size_24,
  emojiSize = FontSize.size_48,
  height = 80,
  width = 340,
  style,
}: ItemType) => {
  // Estado local para el efecto de selección temporal
  const [tempSelected, setTempSelected] = useState(false);
  
  // Si la prop isSelected cambia, actualiza también tempSelected
  useEffect(() => {
    setTempSelected(isSelected);
  }, [isSelected]);

  // Función para manejar el press y luego ejecutar onPress si existe
  const handlePress = () => {
    // Activar el efecto visual temporalmente
    setTempSelected(true);
    
    // Después de 500ms, volver al estado normal si no está seleccionado permanentemente
    if (!isSelected) {
      setTimeout(() => {
        setTempSelected(false);
      }, 500); // Medio segundo de efecto visual
    }
    
    // Ejecutar la función onPress pasada como prop
    if (onPress) {
      onPress();
    }
  };

  // Contenido interno del componente (con o sin emoji)
  const ItemContent = () => (
    <View style={styles.contentContainer}>
      <Text 
        style={[
          styles.textMain, 
          styles.textTypo, 
          { fontSize: textSize },
          !emoji && styles.textFullWidth
        ]}
      >
        {text}
      </Text>
      
      {emoji && (
        <Text 
          style={[
            styles.emojiText, 
            styles.textTypo, 
            { fontSize: emojiSize }
          ]}
        >
          {emoji}
        </Text>
      )}
    </View>
  );
  
  // Crear estilos del contenedor con dimensiones dinámicas
  const containerStyle: ViewStyle = {
    ...styles.item,
    height: height,
    width: width as any, // Necesario para que TypeScript acepte tanto string como number
    ...(style || {}),
  };

  // Estilos específicos para cuando no está seleccionado
  const normalStyle: ViewStyle = {
    ...containerStyle,
    backgroundColor: '#10668A',
  };
  
  // Renderizar versión normal o seleccionada (ya sea permanente o temporal)
  return tempSelected ? (
    <LinearGradient
      style={containerStyle}
      locations={[0, 1]}
      colors={["#19A4DF", "rgba(25, 164, 223, 0)"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <Pressable 
        style={styles.pressable}
        onPress={handlePress}
      >
        <ItemContent />
      </Pressable>
    </LinearGradient>
  ) : (
    <Pressable 
      style={normalStyle}
      onPress={handlePress}
    >
      <ItemContent />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  item: {
    borderRadius: Border.br_10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 340,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_10,
    gap: Gap.gap_30,
    width: "100%",
    height: "100%",
  },
  textMain: {
    flex: 1,
    fontSize: FontSize.size_24,
    textAlign: "center",
  },
  textFullWidth: {
    width: "100%",
  },
  emojiText: {
    minHeight: 60,
    minWidth: 60,
    fontSize: FontSize.size_48, // Reducir el tamaño del emoji
    textAlign: "center",
    alignSelf: "center",
  },
  pressable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Item;
