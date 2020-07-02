import { NavigationContainerRef } from '@react-navigation/native';
import { createRef } from 'react';
import { AppNavigatorParamsList } from './AppNavigator';

export const navigationRef = createRef<NavigationContainerRef>();

export const navigate = (name: keyof AppNavigatorParamsList, params?: object) => {
  navigationRef.current?.navigate({ name, params });
};
