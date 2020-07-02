import React, { useEffect } from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import { routes } from './routes';

export type AppNavigatorParamsList = {
  [routes.LISTING_EDIT]: undefined;
  [routes.FEED]: undefined;
  [routes.ACCOUNT]: { image: number; title: string; subTitle: string };
};

type AppNavigatorNavigationProp = BottomTabNavigationProp<AppNavigatorParamsList>;
type AppNavigatorProps = {
  navigation: AppNavigatorNavigationProp;
};

const Tab = createBottomTabNavigator<AppNavigatorParamsList>();

const AppNavigator = () => {
  const registerForPushNotifications = async () => {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (!permission.granted) {
      return;
    }
    try {
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
    } catch (error) {
      console.log(error, 'Error getting push token');
    }
  };
  useEffect(() => {
    registerForPushNotifications();
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation }: AppNavigatorProps) => ({
          tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='plus-circle' color={color} size={size} />
          ),
        })}
      ></Tab.Screen>
      <Tab.Screen
        name={routes.ACCOUNT}
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
