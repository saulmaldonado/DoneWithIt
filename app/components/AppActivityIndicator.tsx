import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import colors from '../config/colors';

const AppActivityIndicator = ({ visible = false }) => {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.overlay}>
      <LottieView autoPlay loop source={require('../assets/animations/lf30_editor_owZUb4.json')} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    opacity: 0.8,
    zIndex: 100,
  },
});

export default AppActivityIndicator;
