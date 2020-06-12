import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import fonts from '../config/fonts';
import colors from '../config/colors';

const AppButton = ({ title, color = colors.primary, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: color }} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 30,
    marginVertical: 10,
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
  color?: string;
  title: string;
  onPress?: () => void;
}
