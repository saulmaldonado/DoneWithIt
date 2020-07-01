import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import { useNetInfo } from '@react-native-community/netinfo';

export default function App() {
  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
      {!useNetInfo().isInternetReachable && <OfflineNotice />}
    </>
  );
}

const styles = StyleSheet.create({});
