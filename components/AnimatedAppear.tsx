import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

interface AnimatedAppearProps {
  children: React.ReactNode;
  duration?: number; // ms
  delay?: number; // ms
  style?: ViewStyle;
  fromScale?: number;
}

// Componente simple para animar una aparición suave (fade + scale)
// Usa Reanimated para futuras extensiones (gestures, layout animations, etc.)
const AnimatedAppear: React.FC<AnimatedAppearProps> = ({
  children,
  duration = 450,
  delay = 0,
  style,
  fromScale = 0.96,
}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, {
      duration,
      easing: Easing.out(Easing.cubic),
    });
  }, [duration, progress]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        {
          scale: fromScale + (1 - fromScale) * progress.value,
        },
      ],
    };
  });

  return (
    <Animated.View style={[animatedStyle, style]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedAppear;
