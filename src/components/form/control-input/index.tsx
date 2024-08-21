import CustomText from '@components/text';
import { ColorPink, ColorRed, ColorsDark, ColorsLight } from '@theme/colors';
import React, { useState } from 'react';
import { Control, useController } from 'react-hook-form';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ControlledInputProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
  rules?: any;
  secureTextEntry?: boolean;
}

const ControlledInput: React.FC<ControlledInputProps> = ({
  name,
  control,
  placeholder,
  rules,
  secureTextEntry,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focusedInputContainer,
          error && styles.errorBorder,
        ]}
      >
        <TextInput
          style={[styles.input, isFocused && styles.focusedInput, error && styles.errorInput]}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
          onFocus={() => setIsFocused(true)}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholderTextColor={ColorsDark.gray}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.icon}
            onPress={handleTogglePasswordVisibility}
          >
            <Icon
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={ColorsDark.gray}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <View style={styles.containerError}>
          <CustomText style={styles.errorText}>{error.message}</CustomText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: ColorsDark.wood,
    borderRadius: 4,
  },
  focusedInputContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: ColorsDark.gray,
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    flex: 1,
    color: ColorsLight.light,
  },
  focusedInput: {
    backgroundColor: 'transparent',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  errorBorder: {
    borderColor: ColorRed.red,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  errorInput: {
    backgroundColor: 'transparent',
  },
  errorText: {
    color: ColorRed.red,
    fontSize: 12,
  },
  containerError: {
    backgroundColor: ColorPink.dustyPink,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
  },
});

export default ControlledInput;
