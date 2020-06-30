import { create } from 'apisauce';
//testing token
let token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImV4cCI6MTc2NTc3ODQwMDAwMH0._esbrd7d82bOs3dVmQm4weuNDOwgW2YpWSeE9WhM0Fw';

const apiClient = create({
  baseURL: 'http://192.168.29.192:8000/api/v1',
  headers: {
    Authorization: token,
  },
});

export default apiClient;
