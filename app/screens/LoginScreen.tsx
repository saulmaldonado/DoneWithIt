import React, { useState, useContext } from 'react';
import { StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import { SubmitButton, AppForm, AppEmailField, AppErrorMessage } from '../components/forms';
import AppPasswordField from '../components/forms/AppPasswordField';
import { RootStackParamsList } from '../navigation/AuthNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { routes } from '../navigation/routes';
import authApi from '../api/auth';
import { LoginBody, JWTUserBody } from '../api/schemas/auth';
import jwt from 'jwt-decode';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamsList, routes.LOGIN>;
type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const authContext = useContext(AuthContext);

  const handleSubmit = async (credentials: LoginBody) => {
    const result = await authApi.login(credentials);
    if (!result.ok) {
      return setLoginFailed(true);
    } else {
      setLoginFailed(false);
      if (result.data) {
        const user = jwt<JWTUserBody>(result.data.accessToken);

        authContext?.setUser(user);

        const { accessToken, refreshToken } = result.data;
        authStorage.setToken(accessToken, refreshToken);
      }
    }
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        <AppErrorMessage error='Invalid email and or password' visible={loginFailed} />
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
