import { useRoutes } from 'react-router-dom';
import isNull from 'lodash/isNull';

import useAuth from '@/hooks/useAuth';

import privateRoutes from './privateRoutes';
import publicRoutes from './publicRoutes';

const AppRoutes = () => {
  const { user } = useAuth();
  const routes = isNull(user) ? publicRoutes : privateRoutes;
  return useRoutes(routes);
};

export default AppRoutes;
