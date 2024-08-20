import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import CustomText from '@components/text';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {ColorsDark} from '@theme/colors';

type HeaderProps = {
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftText?: string;
  rightText?: string;
  styleContainer?: object;
};

const CustomHeader: React.FC<HeaderProps> = ({
  onLeftPress,
  onRightPress,
  styleContainer,
}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <View style={[styles.content]}>
        {typeof onLeftPress === 'function' && (
          <TouchableOpacity style={{padding: 10}} onPress={onLeftPress}>
            <Icon name={'left-long'} size={30} color={ColorsDark.gray} />
          </TouchableOpacity>
        )}
        {typeof onRightPress === 'function' && (
          <TouchableOpacity style={{padding: 10}} onPress={onRightPress}>
            <Icon name={'right-long'} size={30} color={ColorsDark.gray} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'flex-end',
    height: 70,
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 4,
    backgroundColor: ColorsDark.gray,
    borderRadius: 2,
  },
});
