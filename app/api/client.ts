import { create } from 'apisauce';
import cache from '../util/cache';
import settings from '../config/settings';

const apiClient = create({
  baseURL: settings.apiUrl,
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
