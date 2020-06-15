import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const getLocation = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (granted) {
      try {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();

        setLocation({ latitude, longitude });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
