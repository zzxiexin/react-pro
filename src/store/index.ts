export type StateType = {
  name: string;
};

export type PlayloadType = {
  playload: StateType;
};

export const initialState: StateType = {
  name: '',
};

export const reducer = (state = initialState, action: PlayloadType) => {
  return { ...state, ...action.playload };
};
