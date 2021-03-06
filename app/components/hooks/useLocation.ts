import { useState, useEffect } from 'react';
import { Location as LocationType } from '../../api/schemas/listing';
import * as Location from 'expo-location';

export default () => {
  const [location, setLocation] = useState<LocationType>(null);

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
