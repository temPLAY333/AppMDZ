import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ViewStyle, StyleProp, Dimensions } from 'react-native';
import { Color, FontFamily } from "../GlobalStyles";

export type PinProps = {
  numero: number;
  isLarge?: boolean; // True para estado grande, false para pequeño
  onPress?: () => void;
  style?: StyleProp<ViewStyle>; // Añadimos propiedad de estilo para posicionamiento
};

// Obtener dimensiones de la pantalla para crear pines responsivos
const { width: screenWidth } = Dimensions.get('window');
// Factor de escala según tamaño de pantalla
const scaleFactor = screenWidth / 375; // 375 es el ancho base para iPhone X, un estándar común

const Pin: React.FC<PinProps> = ({ numero, isLarge = false, onPress, style }) => {
  // Calcula los tamaños responsivos
  const smallSize = 30 * Math.min(scaleFactor, 1.3);
  const largeSize = 40 * Math.min(scaleFactor, 1.3);
  
  // Estilos dinámicos para pines responsivos
  const dynamicStyles = {
    containerSmall: {
      width: smallSize,
      height: smallSize,
      // Ajustar las coordenadas para compensar el cambio de tamaño
      marginLeft: -smallSize / 2,
      marginTop: -smallSize / 2,
    },
    containerLarge: {
      width: largeSize,
      height: largeSize,
      // Ajustar las coordenadas para compensar el cambio de tamaño
      marginLeft: -largeSize / 2,
      marginTop: -largeSize / 2,
    },
    pinSmall: {
      width: smallSize,
      height: smallSize,
    },
    pinLarge: {
      width: largeSize,
      height: largeSize,
    },
    pinTextSmall: {
      fontSize: 14 * Math.min(scaleFactor, 1.2),
    },
    pinTextLarge: {
      fontSize: 18 * Math.min(scaleFactor, 1.2),
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isLarge ? dynamicStyles.containerLarge : dynamicStyles.containerSmall,
        style, // Aplicamos el estilo externo para posicionamiento
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[
        styles.pin,
        isLarge ? dynamicStyles.pinLarge : dynamicStyles.pinSmall,
      ]}>
        <Text style={[
          styles.pinText,
          isLarge ? dynamicStyles.pinTextLarge : dynamicStyles.pinTextSmall,
        ]}>
          {numero}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    // No incluimos width y height aquí porque son dinámicos
  },
  pin: {
    backgroundColor: 'rgba(166, 212, 81, 0.9)', // Color verde semi-transparente
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pinText: {
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Eliminamos los estilos estáticos de tamaño porque ahora son dinámicos
});

export default Pin;