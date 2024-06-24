import { createSlice } from '@reduxjs/toolkit';
import { userLocal } from '../../services/localService';

const initialState = {
  userInfo: userLocal.get(),
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    postLoginAction: (state, action) => {
      console.log('info user', action.payload);
      state.userInfo = action.payload;
      userLocal.set(action.payload);
    },

    logOutAction: (state, action) => {
      // Xoá userInfo trên redux
      state.userInfo = '';
      // Xoá userInfo dưới local
      userLocal.remove();
    },
  },
});

export const { postLoginAction, logOutAction } = userSlice.actions;

export default userSlice.reducer;
