import authStorage from '../auth/storage';

/**
 * Retrieves locally stored accessTokens and returns
 * it in the correct format
 * ex 'Bearer ${accessToken}'
 */
export const authHeaders = async () => {
  const tokens = await authStorage.getToken();

  if (tokens) {
    const { accessToken } = tokens;

    return `Bearer ${accessToken}`;
  } else {
    return null;
  }
};
