import { useLocation, Navigate } from 'react-router-dom';
import type { RootState } from '@store/index';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const name = useSelector((state: RootState) => state.login.name);
  const location = useLocation();

  if (!name) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
