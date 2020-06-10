import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';

import Button from '../components/Button';
import colors from '../config/colors';

const WelcomeScreen = () => {
  const backgroundImage = require('../assets/background.jpg');
  const logo = require('../assets/logo-red.png');

  return (
    <ImageBackground source={backgroundImage} style={styles.background} blurRadius={5}>
      <View style={styles.logo}>
        <Image source={logo} style={styles.logoImage} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttons}>
        <Button color={colors.primary}>login</Button>
        <Button color={colors.secondary}>register</Button>
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
    padding: 10,
  },
  buttons: {
    height: '20%',
    justifyContent: 'space-evenly',
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    top: 50,
  },

  text: {
    marginTop: 15,
    fontWeight: '700',
    fontSize: 20,
  },
});
