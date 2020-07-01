import React, { ReactNode } from 'react';
import { StyleSheet, View, SafeAreaView, StyleProp, ViewStyle, Text } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';

const Screen = ({ children, style }: ScreenProps) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: { paddingTop: Constants.statusBarHeight, flex: 1 },
});

type ScreenProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};
