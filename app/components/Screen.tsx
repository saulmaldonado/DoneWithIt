import React, { ReactChildren, ReactNode } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';

const Screen = ({ children }: ScreenProps) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: { paddingTop: Constants.statusBarHeight, flex: 1 },
});

interface ScreenProps {
  children: ReactNode;
}
