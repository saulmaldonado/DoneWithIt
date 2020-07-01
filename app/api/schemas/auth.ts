export type LoginBody = {
  email: string;
  password: string;
};

export type LoginOkResBody = {
  accessToken: string;
  refreshToken: string;
};

export type JWTUserBody = { exp: number; iss: string; userId: number; isAdmin?: true };
