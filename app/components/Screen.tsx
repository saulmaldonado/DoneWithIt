import React, { ReactNode } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, style }: ScreenProps) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <KeyboardAvoidingView
        behavior='position'
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: { paddingTop: Constants.statusBarHeight, flex: 1 },
});

type ScreenProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};
