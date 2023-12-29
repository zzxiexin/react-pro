import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginState {
  name: string;
}

const initialState: LoginState = {
  name: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginState>) => {
      console.log('login in', action);
      const { payload } = action;
      state.name = payload?.name;
    },
    loginOut: (state, action: PayloadAction<LoginState>) => {
      console.log('login out', action);
      const { payload } = action;
      state.name = payload?.name;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, loginOut } = loginSlice.actions;

export default loginSlice.reducer;
