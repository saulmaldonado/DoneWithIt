import { create } from 'apisauce';
import cache from '../util/cache';

const apiClient = create({
  baseURL: 'http://192.168.29.192:8000/api/v1',
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig): Promise<any> => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = cache.get(url);

  return data ? { ok: true, data } : response;
};

export default apiClient;
