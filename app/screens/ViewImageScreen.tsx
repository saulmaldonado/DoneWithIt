import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ViewImageScreen = () => {
  const image = require('../assets/chair.jpg');
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <MaterialCommunityIcons name='close' color={colors.white} size={40} />
        <MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={40} />
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
});
