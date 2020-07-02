import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetails from '../screens/ListingDetails';
import { Platform } from 'react-native';
import { routes } from './routes';
import Constant from 'expo-constants';

export type FeedNavigatorParamsList = {
  [routes.LISTINGS]: undefined;
  [routes.LISTING_DETAILS]: {
    title: string;
    price: number;
    images: { full: string; name: string; thumbnail: string }[];
    id: number;
  };
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
        options={() => ({
          headerStatusBarHeight: Constant.statusBarHeight - 15,
          headerShown: Platform.OS === 'android',
          title: '',
        })}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
