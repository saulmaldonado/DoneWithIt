import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Button = ({ color, children }: ButtonProps) => {
  return (
    <View style={{ ...styles.button, backgroundColor: color }}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 30,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'sans-serif-medium',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

interface ButtonProps {
  color: string;
  children: string;
}
