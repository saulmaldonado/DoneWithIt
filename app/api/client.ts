import { create } from 'apisauce';
//testing token
let token = '';

const apiClient = create({
  baseURL: 'http://192.168.29.192:8000/api/v1',
  headers: {
    Authorization: token,
  },
});

export default apiClient;
