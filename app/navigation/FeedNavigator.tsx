import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetails from '../screens/ListingDetails';

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Listing' component={ListingsScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ListingDetails' component={ListingDetails} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
