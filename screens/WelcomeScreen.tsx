import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';

const WelcomeScreen = () => {
  const backgroundImage = require('../assets/background.jpg');
  const logo = require('../assets/logo-red.png');

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.logo}>
        <Image source={logo} style={styles.logoImage} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.placeholder1} />
        <View style={styles.placeholder2} />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttons: {
    height: '20%',
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    top: 100,
  },
  placeholder1: {
    backgroundColor: '#fc5c65',
    flex: 1,
  },
  placeholder2: {
    backgroundColor: '#4ECDC4',
    flex: 1,
  },
});
