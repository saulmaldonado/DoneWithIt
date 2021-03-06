import React from 'react';
import { StyleSheet } from 'react-native';
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
  async: boolean; // async prop will only be used externally for generating schemas
};
