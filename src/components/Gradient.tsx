import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/color';

interface GradientProps {
  children?: React.JSX.Element | React.JSX.Element[];
  style?: StyleProp<ViewStyle>;
}

export const Gradient = ({ children, style }: GradientProps): React.JSX.Element => {
  return (
    <LinearGradient colors={[Colors.gradientStart, Colors.gradientEnd]} style={[style]}>
      {children}
    </LinearGradient>
  );
};
