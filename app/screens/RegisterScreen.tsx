import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../navigation/AuthNavigator';

import Screen from '../components/Screen';
import {
  AppForm,
  SubmitButton,
  AppConfirmPasswordConfirmationFields,
  AppNameField,
} from '../components/forms';
import AppEmailField from '../components/forms/AppEmailField';

const initialValues = {
  name: '',
  email: '',
  password: '',
  reenterPassword: '',
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Welcome'>;
type RegisterScreenProps = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
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
