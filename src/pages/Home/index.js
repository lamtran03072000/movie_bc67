import React from 'react';
import Banner from './components/banner';
import ListMovie from './components/list-movie';
import Autherization from '../../HOC/autherization';

const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* > 640px */}
      {/* > 768px */}
      {/* <div className="py-3 my-3 bg-black lg:bg-yellow-300 xs:bg-red-600 lg:text-5xl">
        hello cyber soft
      </div> */}

      <ListMovie />
    </div>
  );
};

export default HomePage;
