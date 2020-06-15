import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppNavigatorParamsList } from '../navigation/AppNavigator';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetails from '../screens/ListingDetails';

export type FeedNavigatorParamsList = {
  Listings: undefined;
  ListingDetails: { title: string; price: number; image: number; id: number };
};

const Stack = createStackNavigator<FeedNavigatorParamsList>();

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Listings' component={ListingsScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name='ListingDetails'
        component={ListingDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
