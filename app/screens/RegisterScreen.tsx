import React, { useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamsList } from '../navigation/AuthNavigator';
import {
  AppForm,
  SubmitButton,
  AppConfirmPasswordConfirmationFields,
  AppNameField,
  AppErrorMessage,
} from '../components/forms';
import AppEmailField from '../components/forms/AppEmailField';
import { routes } from '../navigation/routes';
import { useAuth } from '../auth/useAuth';
import AppActivityIndicator from '../components/AppActivityIndicator';
import Screen from '../components/Screen';

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
  const {
    register,
    registerApi: { loading },
  } = useAuth();
  const emailField = useRef(null);

  return (
    <Screen>
      <AppErrorMessage error={error} visible={!!error} />
      <AppActivityIndicator visible={loading} />
      <AppForm
        initialValues={initialValues}
        onSubmit={({ email, name, password }) => register({ email, name, password }, setError)}
      >
        <AppNameField name='name' />

        <AppEmailField name='email' async />

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
