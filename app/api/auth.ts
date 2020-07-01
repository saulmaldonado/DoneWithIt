import client from './client';
import { LoginBody, ResAuthTokens, AuthRegisterBody } from './schemas/auth';

const login = (credentials: LoginBody) => client.post<ResAuthTokens>('/auth/login', credentials);

const logout = (token: string) => client.post('/auth/logout', token);

const register = (registerBody: AuthRegisterBody) =>
  client.post<ResAuthTokens, string>('/auth/register', registerBody);

export default {
  login,
  logout,
  register,
};
