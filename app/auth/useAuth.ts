import { useContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import AuthContext from './context';
import authStorage from './storage';
import { ApiResponse } from 'apisauce';
import { UserRes } from '../api/schemas/user';
import userApi from '../api/user';
import jwt from 'jwt-decode';
import { JWTUserBody, AuthRegisterBody } from '../api/schemas/auth';
import authApi from '../api/auth';
import useApi from '../components/hooks/useApi';

type Profile = {
  image?: any;
  title: string;
  subTitle: string;
};

let defaultProfile: Profile = {
  image: require('../assets/default-profile.png'),
  title: 'Mosh Hamedani',
  subTitle: 'programmingwithmosh@gmail.com',
};

export const useAuth = () => {
  const { setUser, user } = useContext(AuthContext);
  const [profile, setProfile] = useState(defaultProfile);
  const registerApi = useApi(authApi.register);

  const setNewUser = (accessToken: string) => {
    const user = jwt<JWTUserBody>(accessToken);
    setUser(user);
  };

  const logout = () => {
    authStorage.removeToken();
    setUser(null);
  };

  const fetchUser = async () => {
    const id = user?.userId;

    if (id) {
      const { data } = (await userApi.getUser(id)) as ApiResponse<UserRes>;
      if (data) {
        setProfile({ image: profile.image, title: data.name, subTitle: data.email });
      }
    }
  };

  const register = async (
    credentials: AuthRegisterBody,
    setError: Dispatch<SetStateAction<string | undefined>>
  ) => {
    const result = await registerApi.request(credentials);

    if (!result.ok) {
      const errorMessage = result.data!;
      console.log(errorMessage);
      setError(errorMessage);
    } else {
      const { accessToken, refreshToken } = result.data!;
      await authStorage.setTokens(accessToken, refreshToken);
      setNewUser(accessToken);
    }
  };

  const getCurrentUser = () => {
    useEffect(() => {
      fetchUser();
    }, []);
    return profile;
  };

  return { setUser, user, logout, profile, getCurrentUser, setNewUser, register, registerApi };
};
