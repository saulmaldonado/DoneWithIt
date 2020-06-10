import React, { ReactChildren, ReactNode } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children }: ScreenProps) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: { paddingTop: Constants.statusBarHeight },
});

interface ScreenProps {
  children: ReactNode;
}
