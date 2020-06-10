import React from 'react';
import { View, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
