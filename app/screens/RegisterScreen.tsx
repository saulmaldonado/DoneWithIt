import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../navigation/AuthNavigator';
import authStorage from '../auth/storage';

import Screen from '../components/Screen';
import {
  AppForm,
  SubmitButton,
  AppConfirmPasswordConfirmationFields,
  AppNameField,
  AppErrorMessage,
} from '../components/forms';
import AppEmailField from '../components/forms/AppEmailField';
import { routes } from '../navigation/routes';
import authApi from '../api/auth';
import { AuthRegisterBody } from '../api/schemas/auth';
import { useAuth } from '../auth/useAuth';

const initialValues = {
  name: '',
  email: '',
  password: '',
  reenterPassword: '',
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamsList, routes.WELCOME>;
type RegisterScreenProps = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const { register } = useAuth();

  return (
    <Screen style={styles.container}>
      <AppErrorMessage error={error} visible={!!error} />
      <AppForm
        initialValues={initialValues}
        onSubmit={({ email, name, password }) => register({ email, name, password }, setError)}
      >
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
