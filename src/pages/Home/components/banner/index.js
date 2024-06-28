import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { movieService } from '../../../../services/movieService';

const Banner = () => {
  let [listBanner, setListBanner] = useState();

  const fetchListBanner = () => {
    let promise = movieService.getBanner();

    promise
      .then((res) => {
        let reponseListBanner = res.data.content; // [{},{},{}]

        setListBanner(reponseListBanner);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };

  useEffect(() => {
    // call api
    fetchListBanner();
  }, []);

  const renderListBanner = () => {
    // dấu ? : option chaning => nếu listBanner bị undefine thì sẽ return cả đoạn về underfine
    return listBanner?.map((b) => {
      return (
        <div>
          <div className="h-[700px]">
            <img
              className="w-full h-full object-cover"
              src={b.hinhAnh}
              alt=""
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Carousel arrows>{renderListBanner()}</Carousel>
    </div>
  );
};

export default Banner;
