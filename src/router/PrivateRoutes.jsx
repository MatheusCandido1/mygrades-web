import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const PrivateRoutes = ({children, ...rest}) => {
  const { user } = useAuth();

  return (
    user ? <Outlet /> : <Navigate to="/login" />
  );
}

export default PrivateRoutes;