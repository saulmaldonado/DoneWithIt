import { UserRes, UserResAbridged } from './schemas/user';
import apiClient from './client';

const endpoint = '/users';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlzQWRtaW4iOnRydWUsImlzcyI6ImRvbmV3aXRoaXRkZW5vIiwiZXhwIjoxNzMyOTQ2NDAwMDAwfQ.uQQ4ZA7dHI5nI4Boxkf7GatTVtsY5mU4kudaP2zjMhw';
const headers = { Authorization: `Bearer ${token}` };

const getUser = (id: number) =>
  apiClient.get<UserRes | UserResAbridged>(`${endpoint}/${id}`, undefined, { headers });

export default {
  getUser,
};
