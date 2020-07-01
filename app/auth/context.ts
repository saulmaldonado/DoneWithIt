import React from 'react';
import { JWTUserBody } from '../api/schemas/auth';

const AuthContext = React.createContext<{
  user: JWTUserBody | null;
  setUser: React.Dispatch<React.SetStateAction<JWTUserBody | null>>;
}>(null!);

export default AuthContext;
