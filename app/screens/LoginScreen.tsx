import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppTextInput
        placeholder='Email Address'
        icon='email'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        textContentType='emailAddress'
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        placeholder='Password'
        textContentType='password'
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <AppButton title='Login' onPress={() => console.log({ password, email })} />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 80,
  },
});
