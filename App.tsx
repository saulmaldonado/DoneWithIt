import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import { useNetInfo } from '@react-native-community/netinfo';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import { JWTUserBody } from './app/api/schemas/auth';

export default function App() {
  const [user, setUser] = useState<JWTUserBody | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      {!useNetInfo().isInternetReachable && <OfflineNotice />}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
