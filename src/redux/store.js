import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    // chứa toàn bộ state của ứng dụng
    numberReducer: (state = 5) => state,
    userReducer: userSlice,
  },
});
