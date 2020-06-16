import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

export type AppNavigatorParamsList = {
  Feed: undefined;
  ListingEdit: undefined;
  Account: { image: number; title: string; subTitle: string };
};

type AppNavigatorNavigationProp = BottomTabNavigationProp<AppNavigatorParamsList>;
type AppNavigatorProps = {
  navigation: AppNavigatorNavigationProp;
};

const Tab = createBottomTabNavigator<AppNavigatorParamsList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name='ListingEdit'
        component={ListingEditScreen}
        options={({ navigation }: AppNavigatorProps) => ({
          tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate('ListingEdit')} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='plus-circle' color={color} size={size} />
          ),
        })}
      ></Tab.Screen>
      <Tab.Screen
        name='Account'
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppNavigator;
