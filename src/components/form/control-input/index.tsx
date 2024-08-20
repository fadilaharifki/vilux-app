import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useController, Control} from 'react-hook-form';
import {ColorPink, ColorRed, ColorsDark, ColorsLight} from '@theme/colors';
import CustomText from '@components/text';
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

  const {
    field: {onChange, onBlur, value},
    fieldState: {error},
  } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error && styles.errorBorder]}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholderTextColor={ColorsDark.gray}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.icon}
            onPress={handleTogglePasswordVisibility}>
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
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: ColorsDark.gray,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    flex: 1,
    color: ColorsLight.light,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  errorBorder: {
    borderColor: ColorRed.red,
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
