import client from './client';
import { authHeaders } from './authHeaders';

const endpoint = '/notifications';

const addNotification = async (token: string) =>
  client.put(
    endpoint,
    { token },
    {
      headers: { Authorization: await authHeaders() },
    }
  );

const deleteNotification = async () => {
  client.delete(endpoint, undefined, {
    headers: { Authorization: await authHeaders() },
  });
};

export default {
  addNotification,
  deleteNotification,
};
