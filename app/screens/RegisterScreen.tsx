import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
  reenterPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .label('Re-enter Password'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  reenterPassword: '',
};

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name='name'
          placeholder='Name'
          autoCorrect={false}
          textContentType='name'
          icon='account'
        />
        <AppFormField
          name='email'
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='name'
          icon='email'
        />
        <AppFormField
          name='password'
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          placeholder='Password'
          textContentType='password'
          secureTextEntry
        />
        <AppFormField
          name='reenterPassword'
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          placeholder='Re-enter Password'
          textContentType='password'
          secureTextEntry
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
