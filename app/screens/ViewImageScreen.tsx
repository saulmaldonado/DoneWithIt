import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import colors from '../config/colors';

const ViewImageScreen = () => {
  const image = require('../assets/chair.jpg');
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <View style={styles.closeButton} />
        <View style={styles.deleteButton} />
      </View>
      <Image source={image} resizeMode={'contain'} style={styles.image} />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  image: {
    height: '80%',
    width: '100%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  closeButton: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
  },
  deleteButton: {
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
  },
});
