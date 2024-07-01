import React, { useEffect, useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { movieService } from '../../services/movieService';
import InfoDetailMovie from './component/info-detail-movie';
import ScheduleMovieDetail from './component/schedule-movie-detail';
import { useDispatch } from 'react-redux';
import {
  getInfoMovieDetail,
  getScheduleDetailMovie,
} from '../../redux/movie/movieSlice';

const DetailMovie = () => {
  let { idMovie } = useParams();
  const dispatch = useDispatch();
  let refScheduleDetailMovie = useRef();
  const featchDetailMovie = () => {
    let promise = movieService.getDetailMovie(idMovie);
    promise
      .then((res) => {
        dispatch(getInfoMovieDetail(res.data.content));
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };
  // const featchScheduleDetailMovie = () => {
  //   let promise1 = movieService.getScheduleDetailMovie(idMovie);

  //   promise
  //     .then((res) => {
  //       console.log('res schedule detail movie: ', res);
  //     })
  //     .catch((err) => {
  //       console.log('err: ', err);
  //     });
  // };

  const featchScheduleDetailMovie = async () => {
    try {
      let res = await movieService.getScheduleDetailMovie(idMovie);
      dispatch(getScheduleDetailMovie(res.data.content.heThongRapChieu));
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    featchDetailMovie();
    featchScheduleDetailMovie();
    // call api get:id (detail) thì sẽ để vào dependenci
  }, [idMovie]);

  return (
    <div>
      <InfoDetailMovie refScheduleDetailMovie={refScheduleDetailMovie} />
      <ScheduleMovieDetail refScheduleDetailMovie={refScheduleDetailMovie} />
    </div>
  );
};

export default DetailMovie;
