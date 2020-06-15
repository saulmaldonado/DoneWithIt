import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingEditScreen from '../screens/ListingEditScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import FeedNavigator from './FeedNavigator';

export type AppNavigatorParamsList = {
  Feed: undefined;
  ListingEdit: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<AppNavigatorParamsList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Feed' component={FeedNavigator}></Tab.Screen>
      <Tab.Screen name='ListingEdit' component={ListingEditScreen}></Tab.Screen>
      <Tab.Screen name='Account' component={MyAccountScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppNavigator;
