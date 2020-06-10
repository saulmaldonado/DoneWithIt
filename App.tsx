import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';

import { WelcomeScreen } from './screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
