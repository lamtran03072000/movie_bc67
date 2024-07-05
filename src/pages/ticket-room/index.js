import React, { useEffect } from 'react';
import { movieService } from '../../services/movieService';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDataTicketRoomThunk } from '../../redux/movie/movieThunk';

const TicketRoom = () => {
  // lấy mã lịch chiếu từ url
  let { idSchedule } = useParams();
  const dispatch = useDispatch();

  const fecthListDataTicketRoom = () => {
    dispatch(getDataTicketRoomThunk(idSchedule));
  };

  useEffect(() => {
    fecthListDataTicketRoom();
  }, [idSchedule]);

  return <div>TicketRoom</div>;
};

export default TicketRoom;
