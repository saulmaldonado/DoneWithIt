import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppFormField from './AppFormField';

const AppEmailField = ({ name }: AppEmailFieldProps) => {
  return (
    <AppFormField
      name={name}
      placeholder='Email'
      autoCorrect={false}
      textContentType='emailAddress'
      icon='email'
    />
  );
};

export default AppEmailField;

const styles = StyleSheet.create({});

type AppEmailFieldProps = {
  name: string;
};
