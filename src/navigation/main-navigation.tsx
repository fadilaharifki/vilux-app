import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screen/login';
import StartedScreen from '@screen/splash-screen';

export type RootStackParamList = {
  'Splash Screen': undefined;
  'Login Screen': undefined;
};

const Stack = createNativeStackNavigator();
function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash Screen"
        component={StartedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login Screen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
