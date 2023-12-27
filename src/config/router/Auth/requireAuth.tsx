import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '@config/router/Auth/useAuth';
const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.name) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
