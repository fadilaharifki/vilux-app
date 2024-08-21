import { Picker } from '@react-native-picker/picker';
import { ColorPink, ColorRed, ColorsDark } from '@theme/colors';
import React from 'react';
import { Control, useController } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';

interface ControlledPickerProps {
  name: string;
  control: Control<any>;
  items: { label: string; value: any }[];
  placeholder?: string;
  rules?: any;
}

const ControlledPicker: React.FC<ControlledPickerProps> = ({
  name,
  control,
  items,
  placeholder,
  rules,
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <View style={styles.container}>
      <View style={[styles.pickerContainer, error && styles.errorBorder]}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onChange(itemValue)}
          onBlur={onBlur}
          style={styles.picker}
          mode='dialog'
          dropdownIconColor={ColorsDark.gray}
        >
          {placeholder && <Picker.Item label={placeholder} value='' />}
          {items.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
      {error && (
        <View style={styles.containerError}>
          <Text style={styles.errorText}>{error.message}</Text>
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
  pickerContainer: {
    position: 'relative',
    backgroundColor: ColorsDark.wood,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: ColorsDark.gray,
  },
  picker: {
    height: 50,
    width: '100%',
    color: ColorsDark.gray,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
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

export default ControlledPicker;
