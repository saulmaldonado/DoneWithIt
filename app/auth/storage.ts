import * as SecureStore from 'expo-secure-store';
import jwt from 'jwt-decode';
import { JWTUserBody } from '../api/schemas/auth';

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

const extractUser = async (): Promise<JWTUserBody | null> => {
  const tokens = await getToken();
  if (!tokens) {
    return null;
  }
  const { accessToken } = tokens;
  return jwt<JWTUserBody>(accessToken);
};

export default {
  setToken,
  extractUser,
  removeToken,
};
