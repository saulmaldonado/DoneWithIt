import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Listings' component={ListingsScreen}></Tab.Screen>
      <Tab.Screen name='ListingEdit' component={ListingEditScreen}></Tab.Screen>
      <Tab.Screen name='Account' component={MyAccountScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppNavigator;
