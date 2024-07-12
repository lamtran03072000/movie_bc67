import React from 'react';
import Banner from './components/banner';
import ListMovie from './components/list-movie';
import Autherization from '../../HOC/autherization';
import {
  DesktopResponsive,
  MobileResponsive,
  TabletResponsive,
} from '../../HOC/responsive';

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

      {/* 390px */}
      {/* <DesktopResponsive>
        <div className="bg-black text-white py-3">desktop</div>
      </DesktopResponsive>

      <TabletResponsive>
        <div className="bg-yellow-300 text-white py-3">tablet</div>
      </TabletResponsive>

      <MobileResponsive>
        <div className="bg-red-600 text-white py-3">mobile</div>
      </MobileResponsive> */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomePage;
