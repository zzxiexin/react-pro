import { createContext, useContext } from 'react';

type USER_INFO = {
  name: string;
  update_user_info: (arg: { name: string }) => void;
};

export const AuthContent = createContext<USER_INFO>({ name: '', update_user_info: () => {} });

const useAuth = () => {
  return useContext(AuthContent);
};

export default useAuth;
