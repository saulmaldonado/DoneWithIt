import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

const AppActivityIndicator = ({ visible = false }) => {
  if (!visible) {
    return null;
  }
  return (
    <LottieView
      style={{ position: 'absolute', zIndex: 100 }}
      autoPlay
      loop
      source={require('../assets/animations/lf30_editor_owZUb4.json')}
    />
  );
};

export default AppActivityIndicator;
