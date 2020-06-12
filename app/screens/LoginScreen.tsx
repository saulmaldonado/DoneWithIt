import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppErrorMessage from '../components/AppErrorMessage';
import AppFormField from '../components/AppFormField';

export type LoginScreenFormValues = {
  email: string;
  password: string;
};

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik<LoginScreenFormValues>
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <AppFormField
              name='email'
              placeholder='Email Address'
              icon='email'
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              textContentType='emailAddress'
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
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 80,
  },
});
