import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from '@/hooks/useAuth';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => (
  <Router>
    <AuthProvider>{children}</AuthProvider>
  </Router>
);

export default AppProvider;
