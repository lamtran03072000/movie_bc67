import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from '../../redux/user/userSlice';
import { NavLink } from 'react-router-dom';
import { DesktopResponsive, TabletResponsive } from '../../HOC/responsive';
import NavLoginDesktop from './components/NavLoginDesktop';
import NavLoginTablet from './components/NavLoginTablet';

const HeaderPage = () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const renderNavUserLogin = () => {
    // > 1024px
    return (
      <>
        <DesktopResponsive>
          <NavLoginDesktop userInfo={userInfo} />
        </DesktopResponsive>
        {/* 640 - 1024px */}
        <TabletResponsive>
          <NavLoginTablet userInfo={userInfo} />
        </TabletResponsive>
      </>
    );
  };

  return (
    <div className="bg-black">
      <div className="w-4/5 mx-auto flex justify-between py-2 items-center">
        <div className="text-white text-4xl">BC67</div>
        <div>{renderNavUserLogin()}</div>
      </div>
    </div>
  );
};

export default HeaderPage;
