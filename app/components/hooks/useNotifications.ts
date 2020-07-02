import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import { useEffect } from 'react';
import { Notification } from 'expo/build/Notifications/Notifications.types';

export const useNotification = (notificationListener: (notification: Notification) => void) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) {
      Notifications.addListener(notificationListener);
    }
  }, []);
};

const registerForPushNotifications = async () => {
  const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (!permission.granted) {
    return;
  }
  try {
    Notifications.getExpoPushTokenAsync();
  } catch (error) {
    console.log(error, 'Error getting push token');
  }
};
