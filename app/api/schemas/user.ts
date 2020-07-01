export type UserRes = {
  id: number;
  name: string;
  email: string;
};

export type UserResAbridged = Omit<UserRes, 'email'>;
