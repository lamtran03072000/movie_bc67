import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { movieService } from '../../../../services/movieService';
import { useNavigate } from 'react-router-dom';

const ListMovie = () => {
  let [listMove, setListMovie] = useState();
  let navigate = useNavigate();
  const fetchListMovie = () => {
    let promise = movieService.getListMovie();
    promise
      .then((res) => {
        // console.log('res: ', res);
        setListMovie(res.data.content);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };

  useEffect(() => {
    // call api
    fetchListMovie();
  }, []);

  const renderListMovie = () => {
    return listMove?.map((movie) => {
      return (
        <Card
          onClick={() => {
            // /detail-movie/222
            navigate(`/detail-movie/${movie.maPhim}`);
          }}
          cover={<img alt="example" src={movie.hinhAnh} className="h-96" />}
        >
          <p className="text-lg">{movie.tenPhim}</p>
          <p>{movie.moTa.substring(0, 20)} ...</p>
        </Card>
      );
    });
  };
  return (
    <div className="w-4/5 mx-auto">
      <h3 className="text-2xl text-gray-400 text-center">Danh sách phim</h3>

      <div className="grid grid-cols-4 lg:grid-cols-2 xs:grid-cols-1   gap-10">
        {renderListMovie()}
      </div>
    </div>
  );
};

export default ListMovie;
