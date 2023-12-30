import { useLocation, Navigate } from 'react-router-dom';
import login from '@store/index';
const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { userInfo } = login;
  const { name } = userInfo;
  const location = useLocation();

  if (!name) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
