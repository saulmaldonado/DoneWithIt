export type Message = {
  fromUserId: number;
  toUserId: number;
  listingId: number;
  content: string;
  id: number;
  dateTime: number;
};

export type MessageRequestBody = Pick<Message, 'listingId' | 'content' | 'dateTime'>;
