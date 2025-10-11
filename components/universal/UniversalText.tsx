/**
 * UNIVERSAL TEXT COMPONENT
 * Wrapper que funciona idénticamente en React Native y Web
 */

import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { UniversalStyle } from '../../styling/types';
import { UniversalStyleSheet } from '../../styling/UniversalStyleSheet';
import { AppTheme } from '../../styling/theme';

interface UniversalTextProps extends Omit<RNTextProps, 'style'> {
  style?: UniversalStyle | UniversalStyle[];
  variant?: 'title' | 'subtitle' | 'body' | 'caption' | 'button';
  color?: string;
  size?: keyof typeof AppTheme.typography.sizes;
  weight?: keyof typeof AppTheme.typography.weights;
  center?: boolean;
}

export const UniversalText: React.FC<UniversalTextProps> = ({
  style,
  variant,
  color,
  size,
  weight,
  center,
  children,
  ...props
}) => {
  // Crear estilo base según variante
  const baseStyle = React.useMemo(() => {
    let base: UniversalStyle = {};
    
    // Aplicar variante predefinida
    switch (variant) {
      case 'title':
        base = {
          fontSize: AppTheme.typography.sizes.xl,
          fontWeight: 'bold',
          color: AppTheme.colors.text,
        };
        break;
      case 'subtitle':
        base = {
          fontSize: AppTheme.typography.sizes.lg,
          fontWeight: '600',
          color: AppTheme.colors.text,
        };
        break;
      case 'body':
        base = {
          fontSize: AppTheme.typography.sizes.sm,
          color: AppTheme.colors.text,
          lineHeight: AppTheme.typography.sizes.sm * 1.4,
        };
        break;
      case 'caption':
        base = {
          fontSize: AppTheme.typography.sizes.xs,
          color: AppTheme.colors.textSecondary,
        };
        break;
      case 'button':
        base = {
          fontSize: AppTheme.typography.sizes.sm,
          fontWeight: '600',
          color: AppTheme.colors.background,
        };
        break;
      default:
        base = {
          fontSize: AppTheme.typography.sizes.sm,
          color: AppTheme.colors.text,
        };
    }
    
    // Sobrescribir con props individuales
    if (color) base.color = color;
    if (size) base.fontSize = AppTheme.typography.sizes[size];
    if (weight) base.fontWeight = AppTheme.typography.weights[weight];
    if (center) base.textAlign = 'center';
    
    return base;
  }, [variant, color, size, weight, center]);

  // Combinar con estilos personalizados
  const finalStyle = React.useMemo(() => {
    return UniversalStyleSheet.compose(baseStyle, style);
  }, [baseStyle, style]);

  return (
    <RNText style={finalStyle as any} {...props}>
      {children}
    </RNText>
  );
};

// Componentes especializados para casos comunes
export const Title: React.FC<Omit<UniversalTextProps, 'variant'>> = (props) => (
  <UniversalText variant="title" {...props} />
);

export const Subtitle: React.FC<Omit<UniversalTextProps, 'variant'>> = (props) => (
  <UniversalText variant="subtitle" {...props} />
);

export const BodyText: React.FC<Omit<UniversalTextProps, 'variant'>> = (props) => (
  <UniversalText variant="body" {...props} />
);

export const Caption: React.FC<Omit<UniversalTextProps, 'variant'>> = (props) => (
  <UniversalText variant="caption" {...props} />
);

export const ButtonText: React.FC<Omit<UniversalTextProps, 'variant'>> = (props) => (
  <UniversalText variant="button" {...props} />
);