import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppFormField from './AppFormField';

const AppEmailAsyncField = ({ name }: AppEmailAsyncFieldProps) => {
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

export default AppEmailAsyncField;

const styles = StyleSheet.create({});

type AppEmailAsyncFieldProps = {
  name: string;
};
