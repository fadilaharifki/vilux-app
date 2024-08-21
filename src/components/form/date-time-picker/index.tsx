import CustomText from '@components/text';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ColorPink, ColorRed, ColorsDark } from '@theme/colors';
import React, { useState } from 'react';
import { Control, useController } from 'react-hook-form';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CustomDateTimePickerProps {
  name: string;
  control: Control<any>;
  label?: string;
  mode?: 'date' | 'time' | 'datetime';
}

const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({
  name,
  control,
  label = 'Select Date',
  mode = 'date',
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: undefined,
  });

  const [show, setShow] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || value;
    setShow(Platform.OS === 'ios');
    if (event.type === 'set') {
      onChange(currentDate);
    }
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const formatDate = (date: Date) => {
    if (!date) return '';
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };

    if (mode === 'date') {
      options.hour = undefined;
      options.minute = undefined;
    } else if (mode === 'time') {
      options.year = undefined;
      options.month = undefined;
      options.day = undefined;
    }

    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const containerStyle = [
    styles.container,
    isFocused && !error ? styles.focused : {},
    error ? styles.error : {},
  ];

  return (
    <View style={styles.containerDatePicker}>
      <TouchableOpacity
        style={containerStyle}
        onPress={showDatePicker}
        onBlur={() => {
          onBlur();
          setIsFocused(false);
        }}
        onFocus={() => setIsFocused(true)}
      >
        <Text style={styles.label}>{value ? formatDate(value) : label}</Text>
        <Icon name='calendar' size={24} color='#999' />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={value || new Date()} // Ensure DateTimePicker gets a valid Date object
          mode={mode}
          display='default'
          onChange={onChangeDate}
        />
      )}
      {error && (
        <View style={styles.containerError}>
          <CustomText style={styles.errorText}>{error.message}</CustomText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerDatePicker: {
    marginBottom: 8,
    marginTop: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: ColorsDark.wood,
    padding: 10,
    borderRadius: 5,
    height: 50,
    borderWidth: 1,
    borderColor: ColorsDark.gray,
  },
  focused: {
    borderColor: ColorsDark.gray,
    backgroundColor: 'transparent',
  },
  error: {
    borderColor: ColorRed.red,
    backgroundColor: 'transparent',
  },
  label: {
    color: ColorsDark.gray,
    fontSize: 14,
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

export default CustomDateTimePicker;
