import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fonts from '../config/fonts';

const AppButton = ({ color, children }: ButtonProps) => {
  return (
    <View style={{ ...styles.button, backgroundColor: color }}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 30,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontFamily: fonts.primary,
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

interface ButtonProps {
  color: string;
  children: string;
}
