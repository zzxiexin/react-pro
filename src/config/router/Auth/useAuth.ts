import { createContext, useContext } from 'react';

export interface USER_INFO {
  name: string;
  updateUserInfo?: (arg?: Omit<USER_INFO, 'updateUserInfo'>) => void;
  [key: string]: unknown;
}

export const AuthContent = createContext<USER_INFO>({
  name: '',
  updateUserInfo: () => {},
});

const useAuth = () => {
  return useContext(AuthContent);
};

export default useAuth;
