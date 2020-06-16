import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyAccountScreen from '../screens/MyAccountScreen';

export type AccountNavigatorParamsList = {
  Account: undefined;
  Messages: undefined;
};
const Stack = createStackNavigator<AccountNavigatorParamsList>();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Account' component={MyAccountScreen} />
      <Stack.Screen name='Messages' component={MyAccountScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
