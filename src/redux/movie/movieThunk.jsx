import { createAsyncThunk } from '@reduxjs/toolkit';
import { movieService } from '../../services/movieService';

export const getDataTicketRoomThunk = createAsyncThunk(
  'movie/getDataTicketRoomThunk',

  async (payload, { rejectWithValue }) => {
    try {
      let dataTicket = await movieService.getListDataTicketRoom(payload);
      return dataTicket.data.content;
      console.log('dataTicket: ', dataTicket);
    } catch (error) {
      console.log('error: ', error);
    }
  },
);
