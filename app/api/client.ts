import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.29.192:8000/api/v1',
});

export default apiClient;
