export type LoginBody = {
  email: string;
  password: string;
};

export type ResAuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export type AuthRegisterBody = {
  name: string;
  email: string;
  password: string;
};

export type JWTUserBody = { exp: number; iss: string; userId: number; isAdmin?: true };
