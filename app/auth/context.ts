import React from 'react';
import { JWTUserBody } from '../api/schemas/auth';

const AuthContext = React.createContext<{ user: JWTUserBody | null; setUser: any }>(null!);

export default AuthContext;
