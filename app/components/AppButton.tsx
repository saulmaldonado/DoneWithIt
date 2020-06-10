import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import fonts from '../config/fonts';
import colors from '../config/colors';

const AppButton = ({ color = colors.primary, children }: ButtonProps) => {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: color }}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
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
