import authStorage from '../auth/storage';

export const authHeaders = async () => {
  const tokens = await authStorage.getToken();

  if (tokens) {
    const { accessToken } = tokens;

    return `Bearer ${accessToken}`;
  } else {
    return null;
  }
};
