import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import { SubmitButton, AppForm, AppEmailField } from '../components/forms';
import AppPasswordField from '../components/forms/AppPasswordField';
import { RootStackParamsList } from '../navigation/AuthNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { routes } from '../navigation/routes';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamsList, routes.LOGIN>;
type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        <AppEmailField name='email' />
        <AppPasswordField name='password' />

        <SubmitButton title='Login' />
      </AppForm>
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
