import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AppFormField from './AppFormField';

const AppNameField = ({ name }: AppNameFieldProps) => {
  return (
    <AppFormField
      name={name}
      placeholder='Name'
      autoCorrect={false}
      textContentType='name'
      icon='account'
    />
  );
};

export default AppNameField;

const styles = StyleSheet.create({});

type AppNameFieldProps = {
  name: string;
};
