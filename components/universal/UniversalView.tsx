/**
 * UNIVERSAL VIEW COMPONENT
 * Wrapper que funciona idénticamente en React Native y Web
 */

import React from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';
import { UniversalStyle } from '../../styling/types';
import { UniversalStyleSheet } from '../../styling/UniversalStyleSheet';

interface UniversalViewProps extends Omit<RNViewProps, 'style' | 'role'> {
  style?: UniversalStyle | UniversalStyle[];
  // Props adicionales específicas para optimización web
  as?: string; // Para web: 'div', 'section', 'article', etc.
  'data-testid'?: string; // Para testing
}

export const UniversalView: React.FC<UniversalViewProps> = ({
  style,
  as = 'div',
  children,
  ...props
}) => {
  // Procesar estilos usando nuestro sistema universal
  const processedStyle = React.useMemo(() => {
    if (!style) return undefined;
    
    if (Array.isArray(style)) {
      return UniversalStyleSheet.compose(...style);
    }
    
    return UniversalStyleSheet.compose(style);
  }, [style]);

  return (
    <RNView style={processedStyle as any} {...props}>
      {children}
    </RNView>
  );
};

// Componentes especializados para casos comunes
export const Screen: React.FC<UniversalViewProps> = ({ style, ...props }) => (
  <UniversalView 
    style={UniversalStyleSheet.compose({ flex: 1 }, style)}
    {...props}
  />
);

export const Container: React.FC<UniversalViewProps> = ({ style, ...props }) => (
  <UniversalView 
    style={UniversalStyleSheet.compose({ 
      flex: 1, 
      paddingHorizontal: 16,
      paddingVertical: 16,
    }, style)}
    {...props}
  />
);

export const Card: React.FC<UniversalViewProps> = ({ style, ...props }) => (
  <UniversalView 
    style={UniversalStyleSheet.compose({
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 16,
    }, style)}
    {...props}
  />
);

// Row y Column para layouts comunes
export const Row: React.FC<UniversalViewProps> = ({ style, ...props }) => (
  <UniversalView 
    style={UniversalStyleSheet.compose({ 
      flexDirection: 'row',
      alignItems: 'center',
    }, style)}
    {...props}
  />
);

export const Column: React.FC<UniversalViewProps> = ({ style, ...props }) => (
  <UniversalView 
    style={UniversalStyleSheet.compose({ 
      flexDirection: 'column',
    }, style)}
    {...props}
  />
);

// Spacer para espaciado
interface SpacerProps {
  size?: number;
  horizontal?: boolean;
}

export const Spacer: React.FC<SpacerProps> = ({ size = 16, horizontal = false }) => (
  <UniversalView 
    style={{
      [horizontal ? 'width' : 'height']: size,
    }}
  />
);