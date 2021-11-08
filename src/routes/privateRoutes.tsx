import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Outlet />
  </Suspense>
);

const privateRoutes = [
  {
    path: '*',
    element: <App />,
    children: [{ path: '*', element: <div>Hi there 👋 </div> }],
  },
];

export default privateRoutes;
