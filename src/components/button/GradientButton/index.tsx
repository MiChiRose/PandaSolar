import React, { memo } from 'react';
import { TouchableOpacity, Text, ViewStyle, StyleProp } from 'react-native';
import { Gradient } from '../../Gradient';
import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const GradientButton = ({ text, onPress, style }: ButtonProps): React.JSX.Element => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Gradient style={[styles.container, { paddingHorizontal: 25 }]}>
        <Text style={styles.text}>{text}</Text>
      </Gradient>
    </TouchableOpacity>
  );
};

export default memo(GradientButton);
