import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Animated, Platform } from "react-native";
import * as Haptics from "expo-haptics";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

// Internal state type replacing former CircleSelectorState
type QuestionOptionState = "SinMarcar" | "Seleccionado" | "Correcto" | "Incorrecto";

type QuestionOptionProps = {
  text: string;
  state: QuestionOptionState;
  onPress: () => void;
  disabled?: boolean;
  explanation?: string;
  showExplanation?: boolean;
  /** Índice de la opción para accesibilidad */
  optionIndex?: number;
  /** Total de opciones para accesibilidad */
  totalOptions?: number;
};

const QuestionOption: React.FC<QuestionOptionProps> = ({
  text,
  state,
  onPress,
  disabled = false,
  explanation = "",
  showExplanation = false,
  optionIndex,
  totalOptions,
}) => {
  const isSelected = state === "Seleccionado";
  const isCorrect = state === "Correcto";
  const isIncorrect = state === "Incorrecto";
  
  // Animaciones
  const scale = useRef(new Animated.Value(1)).current;
  const borderWidth = useRef(new Animated.Value(isSelected ? 2 : 0)).current;
  const explanationHeight = useRef(new Animated.Value(0)).current;
  
  // Animar cambios de estado
  useEffect(() => {
    Animated.timing(borderWidth, {
      toValue: isSelected || isCorrect || isIncorrect ? 2 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isSelected, isCorrect, isIncorrect]);
  
  // Animar explicación
  useEffect(() => {
    if (showExplanation && explanation && state !== "SinMarcar") {
      Animated.spring(explanationHeight, {
        toValue: 1,
        useNativeDriver: true,
        speed: 12,
        bounciness: 8,
      }).start();
    } else {
      Animated.timing(explanationHeight, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [showExplanation, explanation, state]);
  
  const animateIn = () => {
    if (Platform.OS !== 'web' && !disabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };
  
  const animateOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };
  
  const handlePress = () => {
    if (disabled) return;
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    onPress();
  };
  
  // Determinar label de accesibilidad
  const getAccessibilityLabel = () => {
    let label = text;
    if (optionIndex !== undefined && totalOptions !== undefined) {
      label = `Opción ${optionIndex + 1} de ${totalOptions}: ${text}`;
    }
    if (isCorrect) label += ". Respuesta correcta";
    if (isIncorrect) label += ". Respuesta incorrecta";
    if (isSelected) label += ". Seleccionada";
    return label;
  };
  
  const getAccessibilityHint = () => {
    if (disabled) return "Esta opción no está disponible";
    if (isCorrect || isIncorrect) return "Resultado de tu respuesta";
    return "Toca para seleccionar esta opción";
  };
  
  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Pressable
          style={[
            styles.contentContainer,
            isSelected && styles.contentSelected,
            isCorrect && styles.contentCorrect,
            isIncorrect && styles.contentIncorrect,
          ]}
          android_ripple={{ color: 'rgba(255,255,255,0.12)', borderless: false }}
          onPress={handlePress}
          onPressIn={animateIn}
          onPressOut={animateOut}
          disabled={disabled}
          accessibilityRole="button"
          accessibilityLabel={getAccessibilityLabel()}
          accessibilityHint={getAccessibilityHint()}
          accessibilityState={{
            disabled: disabled,
            selected: isSelected,
            checked: isCorrect || isSelected,
          }}
        >
          <Text style={styles.optionText}>{text}</Text>
          
          {/* Indicador visual de estado */}
          {(isCorrect || isIncorrect) && (
            <Text style={styles.statusIcon}>
              {isCorrect ? "✓" : "✗"}
            </Text>
          )}
        </Pressable>
      </Animated.View>
      
      {showExplanation && explanation && state !== "SinMarcar" && (
        <Animated.View 
          style={[
            styles.explanationContainer,
            {
              opacity: explanationHeight,
              transform: [{
                translateY: explanationHeight.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-10, 0],
                }),
              }],
            }
          ]}
        >
          <Text 
            style={styles.explanationText}
            accessibilityLabel={`Explicación: ${explanation}`}
            accessibilityRole="text"
          >
            {explanation}
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 12
  },
  contentSelected: {
    backgroundColor: "rgba(25, 164, 223, 0.25)",
    borderWidth: 1,
    borderColor: "#19A4DF"
  },
  contentCorrect: {
    backgroundColor: "rgba(141, 191, 47, 0.28)",
    borderWidth: 1,
    borderColor: Color.colorSuccessBorder
  },
  contentIncorrect: {
    backgroundColor: "rgba(199, 57, 43, 0.35)",
    borderWidth: 1,
    borderColor: Color.colorDangerBorder
  },
  optionText: {
    flex: 1,
    color: Color.colorWhite,
    fontSize: FontSize.size_20,
    fontFamily: FontFamily.interRegular,
    marginRight: 12
  },
  statusIcon: {
    color: Color.colorWhite,
    fontSize: FontSize.size_24,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    marginLeft: 8,
  },
  explanationContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: 8,
    marginTop: 8,
    marginLeft: 16
  },
  explanationText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.interRegular,
    fontStyle: "italic"
  }
});

export default QuestionOption;