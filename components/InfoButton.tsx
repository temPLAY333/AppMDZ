import React, { useContext, useRef } from 'react';
import { StyleSheet, ViewStyle, Pressable, Animated, Platform } from 'react-native';
import { Image } from 'expo-image';
import { NavigationContext } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { Color, FontFamily } from '../GlobalStyles';

const EXCLUDE: string[] = [
  'InformacionAdicional',
  'JuegosPregunta1',
  'Referencias',
  'Glosario'
];

interface InfoButtonProps {
  style?: ViewStyle;
}

const InfoButton: React.FC<InfoButtonProps> = ({ style }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const rotation = useRef(new Animated.Value(0)).current;
  
  // Usar NavigationContext directamente para evitar excepción si no existe
  const navigation = useContext(NavigationContext) as any | undefined;
  const isNavigationReady = !!navigation && typeof navigation.navigate === 'function';
  // Obtener nombre de ruta actual de forma segura (puede ser undefined fuera de un screen)
  const currentRouteName: string | undefined = navigation?.getCurrentRoute?.()?.name;
  if (currentRouteName && EXCLUDE.includes(currentRouteName)) return null;
  // Si no hay navegación disponible (por ejemplo, en splash o fallback), ocultar el botón para evitar confusiones
  if (!isNavigationReady) return null;

  const animateIn = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 0.9,
        useNativeDriver: true,
        speed: 50,
        bounciness: 10,
      }),
      Animated.timing(rotation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };
  
  const animateOut = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 50,
        bounciness: 10,
      }),
      Animated.timing(rotation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };
  
  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '15deg'],
  });

  // Handler seguro
  const handlePress = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    
    if (isNavigationReady) {
      try {
        navigation.navigate('InformacionAdicional');
      } catch (e) {
        console.warn('[InfoButton] Falló navigate InformacionAdicional:', e);
      }
    } else if (typeof window !== 'undefined') {
      // Fallback mínimo: recargar o mostrar hash para debug
      window.location.hash = '#info';
      console.warn('[InfoButton] Navegación no disponible fuera de NavigationContainer');
    }
  };

  return (
    <Animated.View 
      style={[
        styles.container,
        style,
        {
          transform: [
            { scale },
            { rotate: rotateInterpolate },
          ],
        },
      ]}
    >
      <Pressable
        onPress={handlePress}
        onPressIn={animateIn}
        onPressOut={animateOut}
        style={styles.pressable}
        accessibilityRole="button"
        accessibilityLabel="Información adicional"
        accessibilityHint="Abre la pantalla de información adicional sobre la aplicación"
      >
        <Image
          source={require('../assets/SignoPregunta.png')}
          style={styles.icon}
          contentFit="contain"
          accessibilityIgnoresInvertColors
        />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 18,
    right: 18,
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: 32,
    width: 64,
    height: 64,
    borderWidth: 2,
    borderColor: '#A6D451',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  pressable: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outsideNav: {
    borderColor: '#ff9800',
  },
  icon: {
    width: 40,
    height: 40
  }
});

export default InfoButton;