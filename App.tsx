import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { AppLoading } from 'expo';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import authStorage from './app/auth/storage';
import AuthContext from './app/auth/context';
import { JWTUserBody } from './app/api/schemas/auth';
import { navigationRef } from './app/navigation/rootNavigation';

export default function App() {
  const [user, setUser] = useState<JWTUserBody | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const restoreUser = async () => {
    const user = await authStorage.extractUser();
    setUser(user);
  };

  if (!isReady) {
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice />
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
