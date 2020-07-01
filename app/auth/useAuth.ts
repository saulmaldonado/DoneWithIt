import { useContext, useEffect, useState } from 'react';
import AuthContext from './context';
import authStorage from './storage';
import { ApiResponse } from 'apisauce';
import { UserRes } from '../api/schemas/user';
import userApi from '../api/user';

type Profile = {
  image?: any;
  title: string;
  subTitle: string;
};

let defaultProfile: Profile = {
  image: require('../assets/mosh.jpg'),
  title: 'Mosh Hamedani',
  subTitle: 'programmingwithmosh@gmail.com',
};

export const useAuth = () => {
  const { setUser, user } = useContext(AuthContext);
  const [profile, setProfile] = useState(defaultProfile);

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

  const getCurrentUser = () => {
    useEffect(() => {
      fetchUser();
    }, []);
    return profile;
  };

  return { setUser, user, logout, profile, getCurrentUser };
};
