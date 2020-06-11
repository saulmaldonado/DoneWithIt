import React, { ReactChildren, ReactNode } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StyleSheetProperties,
  StyleProp,
  ViewStyle,
} from 'react-native';
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
