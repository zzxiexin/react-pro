import type { USER_INFO } from '@config/router/Auth/useAuth';

export type PlayloadType = {
  playload: USER_INFO;
};

export const initialState: USER_INFO = {
  name: '',
};

export const reducer = (state = initialState, action: PlayloadType) => {
  return { ...state, ...action.playload };
};
