import { ColorsDark, ColorsLight } from '@theme/colors';
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  outline?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean; // Menambahkan prop disabled
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  outline = false,
  style,
  textStyle,
  disabled = false,
}) => {
  const backgroundColor = disabled
    ? ColorsDark.wood
    : outline
      ? 'transparent'
      : getBackgroundColor(variant);
  const borderColor = disabled ? ColorsDark.wood : getBackgroundColor(variant);
  const textColor = disabled
    ? ColorsDark.gray
    : outline
      ? borderColor
      : ColorsLight.light;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor, borderColor, borderWidth: outline ? 2 : 0 },
        style,
      ]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const getBackgroundColor = (
  variant: 'primary' | 'secondary' | 'danger' | 'success',
): string => {
  switch (variant) {
    case 'primary':
      return '#FF634E';
    case 'secondary':
      return '#2196F3';
    case 'danger':
      return '#F44336';
    case 'success':
      return '#4CAF50';
    default:
      return '#4CAF50';
  }
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'transparent',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default CustomButton;
