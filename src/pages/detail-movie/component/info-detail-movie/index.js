import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Image } from 'antd';

const InfoDetailMovie = ({ refScheduleDetailMovie }) => {
  let { infoDetailMovie } = useSelector((state) => state.movieReducer);

  //   npm i moment
  return (
    <div className="bg-gray-500 py-5">
      <div className=" w-4/5 mx-auto flex">
        <div className="w-2/5">
          <Image src={infoDetailMovie.hinhAnh} alt="" />
        </div>
        <div className="w-3/5 space-y-8">
          <p>{infoDetailMovie.tenPhim}</p>
          <p>{moment(infoDetailMovie.ngayKhoiChieu).format('DD/MM/YYYY')}</p>

          <p>{infoDetailMovie.moTa}</p>
          <button
            onClick={() => {
              let element = refScheduleDetailMovie.current;

              element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-purple-400 text-white p-3 rounded-lg"
          >
            Mua vé
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoDetailMovie;
