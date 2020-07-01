import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import { JWTUserBody } from './app/api/schemas/auth';
import authStorage from './app/auth/storage';
import jwt from 'jwt-decode';
import { AppLoading } from 'expo';

export default function App() {
  const [user, setUser] = useState<JWTUserBody | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const restoreUser = async () => {
    const tokens = await authStorage.getToken();
    if (!tokens) {
      return;
    }
    const { accessToken } = tokens;
    const user = jwt<JWTUserBody>(accessToken);

    setUser(user);
  };

  if (!isReady) {
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />;
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice />
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
