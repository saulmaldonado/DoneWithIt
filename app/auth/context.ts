import React from 'react';

const AuthContext = React.createContext<{ user: string | null; setUser: any } | null>(null);

export default AuthContext;
