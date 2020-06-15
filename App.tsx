import React, { useState } from 'react';
import { View, StyleSheet, Platform, StatusBar, Text } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetails from './app/screens/ListingDetails';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import Icon from './app/components/Icon';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { AppForm, SubmitButton } from './app/components/forms';
import AppFormPicker from './app/components/forms/AppFormPicker';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AppImageInput from './app/components/AppImageInput';
import AppImageInputList from './app/components/AppImageInputList';
import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <View style={styles.container}>
        <AuthNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
