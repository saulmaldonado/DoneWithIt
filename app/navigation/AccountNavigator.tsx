import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyAccountScreen from '../screens/MyAccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import { routes } from './routes';

export type AccountNavigatorParamsList = {
  [routes.ACCOUNT]: undefined;
  [routes.MESSAGES]: undefined;
};
const Stack = createStackNavigator<AccountNavigatorParamsList>();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.ACCOUNT} component={MyAccountScreen} />
      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
