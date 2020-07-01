import * as SecureStore from 'expo-secure-store';

const setToken = async (access: string, refresh: string) => {
  try {
    await SecureStore.setItemAsync('access', access);
    await SecureStore.setItemAsync('refresh', refresh);
  } catch (error) {
    console.log(error);
  }
};

const getToken = async (): Promise<{ accessToken: string; refreshToken: string } | null> => {
  try {
    const accessToken = await SecureStore.getItemAsync('access');
    const refreshToken = await SecureStore.getItemAsync('refresh');
    if (accessToken && refreshToken) {
      return { accessToken, refreshToken };
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync('access');
    await SecureStore.deleteItemAsync('refresh');
  } catch (error) {
    console.log(error);
  }
};

export default {
  setToken,
  getToken,
  removeToken,
};
