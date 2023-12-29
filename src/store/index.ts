import { create } from 'zustand';

export interface USER_INFO {
  name: string;
  [key: string]: unknown;
}

const useLoginStore = create((set) => ({
  name: '',
  doLogin: (arg: USER_INFO) => set((state: USER_INFO) => ({ ...state, ...arg })),
  loginOut: () => set({ name: '' }),
}));

export default useLoginStore;
