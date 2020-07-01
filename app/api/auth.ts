import client from './client';
import { LoginBody, LoginOkResBody } from './schemas/auth';

const login = (credentials: LoginBody) => client.post<LoginOkResBody>('/auth/login', credentials);

const logout = (token: string) => client.post('/auth/logout', token);

export default {
  login,
  logout,
};
