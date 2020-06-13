import React from 'react';
import { StyleSheet } from 'react-native';
import AppFormField from './AppFormField';

const AppPasswordField = ({ name }: AppPasswordFieldProps) => {
  return (
    <AppFormField
      name={name}
      autoCapitalize='none'
      autoCorrect={false}
      icon='lock'
      placeholder='Password'
      textContentType='password'
      secureTextEntry
    />
  );
};

export default AppPasswordField;

const styles = StyleSheet.create({});

type AppPasswordFieldProps = {
  name: string;
};
