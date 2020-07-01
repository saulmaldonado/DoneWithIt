import { AsyncStorage } from 'react-native';

const store = async (key: any, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(`cache_${key}`, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key: any) => {
  try {
    const value = (await AsyncStorage.getItem(`cache_${key}`)) as any;
    if (!value) {
      return null;
    } else if (isExpired(value.timestamp)) {
      await AsyncStorage.removeItem(`cache_${key}`);
      return null;
    } else {
      const item = JSON.parse(value);
      return item.value;
    }
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item: any): boolean => {
  const currentTime = Date.now();
  const diff = currentTime - item.timestamp;
  const expiryTime = 1000 * 60 * 60 * 24; // 24h

  return diff > expiryTime;
};

export default {
  store,
};
