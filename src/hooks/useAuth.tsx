/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import createCtx from '@/helpers/createContext';

type User = {
  name: string;
  email: string;
  avatar: string;
};

type LoginCredentialsDTO = {
  email: string;
  password: string;
};

const [useAuth, AuthContextProvider] = createCtx<{
  user: User | null;
  signIn: ({ email, password }: LoginCredentialsDTO) => Promise<User | null>;
  logOut: () => void;
}>();

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  const signIn = async ({ email, password }: LoginCredentialsDTO) => {
    try {
      console.log({ email, password });
      const response = {
        user: {
          name: 'Mido ssi',
          email: 'mockuser1108@example.com',
          avatar:
            'https://1739752386.rsc.cdn77.org/data/images/full/245066/hospital-playlist-2-jeon-mi-do.jpg',
        },
      };
      setUser(response.user);
      return response.user;
    } catch (error) {
      setUser(null);
      console.error(error);
      return null;
    }
  };

  const logOut = () => {
    setUser(null);
    navigate('/login');
  };

  const value = {
    user,
    signIn,
    logOut,
  };
  return <AuthContextProvider value={value}>{children}</AuthContextProvider>;
};

export default useAuth;
export { AuthProvider };
