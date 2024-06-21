import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // chứa toàn bộ state của ứng dụng
    numberReducer: (state = 5) => state,
  },
});
