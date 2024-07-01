import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoDetailMovie: {},
  scheduleDetailMovie: [],
};

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    getInfoMovieDetail: (state, action) => {
      state.infoDetailMovie = action.payload;
    },
    getScheduleDetailMovie: (state, action) => {
      state.scheduleDetailMovie = action.payload;
    },
  },
});

export const { getInfoMovieDetail, getScheduleDetailMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
