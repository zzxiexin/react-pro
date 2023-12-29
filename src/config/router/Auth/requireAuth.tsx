import { useLocation, Navigate } from 'react-router-dom';
import useLoginStore from '@src/store';
const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const name = useLoginStore((state) => state.name);
  const location = useLocation();

  if (!name) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
