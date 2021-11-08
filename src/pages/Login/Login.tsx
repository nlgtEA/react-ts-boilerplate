import React from 'react';
import { Link } from 'react-router-dom';

import PublicformLayout from '@/components/Layout/PublicFormLayout';
import LoginForm from './components/LoginForm';

const Login = () => (
  <PublicformLayout title="Login">
    <LoginForm />
    <div className="mt-2 text-blue-600 font-light">
      <Link to="/register">Not having an account? Register!</Link>
    </div>
  </PublicformLayout>
);

export default Login;
