import client from './client';
import { Message, MessageRequestBody } from './schemas/message';
import { authHeaders } from './authHeaders';

const endpoint = '/messages';

const sendMessage = async (message: MessageRequestBody) =>
  client.post<Message>(endpoint, message, {
    headers: { Authorization: await authHeaders() },
  });

export { sendMessage };
