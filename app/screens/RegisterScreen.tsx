import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppConfirmPasswordConfirmationFields,
} from '../components/forms';
import * as yup from 'yup';

let validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().required().email().label('Email'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  reenterPassword: '',
};

const RegisterScreen = () => {
  const [formValidation, setFormValidation] = useState(validationSchema);

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={formValidation}
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

        <AppConfirmPasswordConfirmationFields
          password='password'
          confirmPassword='reenterPassword'
          setFormValidation={setFormValidation}
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
