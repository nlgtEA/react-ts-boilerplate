import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Login from '@/pages/Login';

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Outlet />
  </Suspense>
);

const publicRoutes = [
  {
    path: '*',
    element: <App />,
    children: [{ path: '*', element: <Login /> }],
  },
];

export default publicRoutes;
