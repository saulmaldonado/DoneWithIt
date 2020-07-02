import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import { routes } from './routes';
import { navigate } from '../navigation/rootNavigation';
import { useNotification } from '../components/hooks/useNotifications';

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
  useNotification((notification) => {
    if (notification.origin === 'selected') {
      navigate(routes.ACCOUNT);
    }
  });

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
