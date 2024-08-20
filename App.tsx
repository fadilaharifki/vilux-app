/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import StartedScreen from '@screen/splash-screen';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <StartedScreen />
    </SafeAreaView>
  );
}

export default App;
