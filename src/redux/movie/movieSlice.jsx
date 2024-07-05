import { createSlice } from '@reduxjs/toolkit';
import { getDataTicketRoomThunk } from './movieThunk';

const initialState = {
  infoDetailMovie: {},
  scheduleDetailMovie: [],

  infoTicketRoom: {},
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
  extraReducers: (builder) => {
    builder.addCase(getDataTicketRoomThunk.fulfilled, (state, action) => {
      state.infoTicketRoom = action.payload;
    });
  },
});

export const { getInfoMovieDetail, getScheduleDetailMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
