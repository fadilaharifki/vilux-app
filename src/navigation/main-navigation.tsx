import CustomHeader from '@components/header';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screen/login';
import SignUpScreen from '@screen/signup';
import StartedScreen from '@screen/splash-screen';
import { ColorsDark } from '@theme/colors';
import { StyleSheet } from 'react-native';

export type RootStackParamList = {
  'Splash Screen': undefined;
  'Login Screen': undefined;
  'Sign Up Screen': undefined;
};

const Stack = createNativeStackNavigator();
function MainNavigation() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Splash Screen'
        component={StartedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Login Screen'
        component={LoginScreen}
        options={{
          header: () => (
            <CustomHeader
              onLeftPress={() => {
                navigation.goBack();
              }}
              styleContainer={styles.container}
            />
          ),
        }}
      />
      <Stack.Screen
        name='Sign Up Screen'
        component={SignUpScreen}
        options={{
          header: () => (
            <CustomHeader
              onLeftPress={() => {
                navigation.goBack();
              }}
              styleContainer={styles.container}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsDark.black,
  },
});
