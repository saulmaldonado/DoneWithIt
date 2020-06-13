import React from 'react';
import { StyleSheet } from 'react-native';
import AppFormField from './AppFormField';

const AppPasswordConfirmationFields = ({
  password,
  confirmPassword,
}: AppPasswordConfirmationFieldsProps) => {
  return (
    <>
      <AppFormField
        name={password}
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        placeholder='Password'
        textContentType='password'
        secureTextEntry
      />
      <AppFormField
        name={confirmPassword}
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        placeholder='Confirm Password'
        textContentType='password'
        secureTextEntry
      />
    </>
  );
};

export default AppPasswordConfirmationFields;

type AppPasswordConfirmationFieldsProps = {
  name: string[];
  password: string;
  confirmPassword: string;
};

const styles = StyleSheet.create({});
