import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppErrorMessage from '../components/AppErrorMessage';

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              placeholder='Email Address'
              icon='email'
              autoCapitalize='none'
              onBlur={() => setFieldTouched('email')}
              autoCorrect={false}
              keyboardType='email-address'
              textContentType='emailAddress'
              onChangeText={handleChange('email')}
            />

            <AppErrorMessage error={errors.email} visible={touched.email} />

            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onBlur={() => setFieldTouched('password')}
              placeholder='Password'
              textContentType='password'
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            <AppErrorMessage error={errors.password} visible={touched.password} />
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
