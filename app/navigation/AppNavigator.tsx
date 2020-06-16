import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

export type AppNavigatorParamsList = {
  Feed: undefined;
  ListingEdit: undefined;
  Account: { image: number; title: string; subTitle: string };
};

const Tab = createBottomTabNavigator<AppNavigatorParamsList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{ tabBarIcon: () => <MaterialCommunityIcons name='account-check-outline' /> }}
      ></Tab.Screen>
      <Tab.Screen name='ListingEdit' component={ListingEditScreen}></Tab.Screen>
      <Tab.Screen name='Account' component={AccountNavigator}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppNavigator;
