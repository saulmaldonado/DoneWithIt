import React from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import {
  AppForm,
  SubmitButton,
  AppConfirmPasswordConfirmationFields,
  AppNameField,
} from '../components/forms';
import AppEmailField from '../components/forms/AppEmailField';
import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  reenterPassword: '',
};

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm initialValues={initialValues} onSubmit={(values) => console.log(values)}>
        <AppNameField name='name' />

        <AppEmailField name='email' />

        <AppConfirmPasswordConfirmationFields
          name={['password', 'reenterPassword']}
          password='password'
          confirmPassword='reenterPassword'
        />
        <SubmitButton title='Register' />
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
