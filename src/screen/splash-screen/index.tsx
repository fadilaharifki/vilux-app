import CustomText from '@components/text';
import {Image, StyleSheet, View} from 'react-native';
import {ColorsDark, ColorsLight} from '@theme/colors';
import CustomButton from '@components/button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@navigation/main-navigation';

const StartedScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerContent}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <CustomText style={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Egestas non id ornare
            feugiat. Consectetur non molestie posuere feugiat nulla. Urna
            adipisc
          </CustomText>
        </View>

        <View style={styles.containerButton}>
          <CustomButton
            onPress={() => {
              navigation.navigate('Login Screen');
            }}
            title="Get Started"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartedScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: ColorsDark.black,
    justifyContent: 'center',
    padding: 20,
  },
  containerContent: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 50,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    color: ColorsLight.light,
    textAlign: 'center',
    lineHeight: 25,
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
