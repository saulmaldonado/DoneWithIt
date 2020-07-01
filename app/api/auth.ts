import client from './client';
import { LoginBody, LoginOkResBody } from './schemas/auth';

const login = (credentials: LoginBody) => client.post<LoginOkResBody>('/auth/login', credentials);

export default {
  login,
};
