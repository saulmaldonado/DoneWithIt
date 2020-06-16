import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetails from '../screens/ListingDetails';
import { Platform } from 'react-native';
import { routes } from './routes';

export type FeedNavigatorParamsList = {
  [routes.LISTINGS]: undefined;
  [routes.LISTING_DETAILS]: { title: string; price: number; image: number; id: number };
};

const Stack = createStackNavigator<FeedNavigatorParamsList>();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode='modal'>
      <Stack.Screen
        name={routes.LISTINGS}
        component={ListingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
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
