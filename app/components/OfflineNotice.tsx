import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';
import { useNetInfo } from '@react-native-community/netinfo';

const OfflineNotice = () => {
  const isOnline = useNetInfo().isInternetReachable;
  if (!isOnline) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  } else {
    return null;
  }
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: '100%',
    position: 'absolute',
    zIndex: 100,
    top: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 17,
  },
});
