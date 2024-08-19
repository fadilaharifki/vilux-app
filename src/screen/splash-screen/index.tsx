/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView>
      <Text>dasas</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
