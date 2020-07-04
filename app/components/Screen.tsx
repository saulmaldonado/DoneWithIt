import React, { ReactNode } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, style }: ScreenProps) => {
  return (
    <ScrollView>
      <SafeAreaView style={[styles.screen, style]}>
        <KeyboardAvoidingView
          behavior='position'
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: { padding: 5, paddingTop: Constants.statusBarHeight, flex: 1 },
});

type ScreenProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};
