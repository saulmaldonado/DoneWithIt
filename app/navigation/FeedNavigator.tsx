import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetails from '../screens/ListingDetails';
import { Platform } from 'react-native';

export type FeedNavigatorParamsList = {
  Listings: undefined;
  ListingDetails: { title: string; price: number; image: number; id: number };
};

const Stack = createStackNavigator<FeedNavigatorParamsList>();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode='modal'>
      <Stack.Screen name='Listings' component={ListingsScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name='ListingDetails'
        component={ListingDetails}
        options={({ route }) => ({
          headerShown: Platform.OS === 'android',
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
