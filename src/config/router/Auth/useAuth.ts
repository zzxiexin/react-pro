import { createContext, useContext } from 'react';

export type USER_INFO = {
  name: string;
  [key: string]: unknown;
};

export type Context_Type = USER_INFO & {
  updateUserInfo?: (arg: USER_INFO) => void;
};

export const AuthContent = createContext<USER_INFO & Context_Type>({ name: '', updateUserInfo: () => {} });

const useAuth = () => {
  return useContext(AuthContent);
};

export default useAuth;
