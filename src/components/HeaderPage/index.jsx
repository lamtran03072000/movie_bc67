import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from '../../redux/user/userSlice';
import { NavLink } from 'react-router-dom';

const HeaderPage = () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const renderNavUserLogin = () => {
    if (userInfo) {
      return (
        <>
          <span className="text-white">{userInfo.hoTen}</span>
          <button
            onClick={() => {
              dispatch(logOutAction());
            }}
            className="bg-red-500 text-white rounded p-2 mx-2"
          >
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <NavLink
            to={'/auth/login'}
            className="bg-blue-500 text-white rounded p-2 mx-2"
          >
            Đăng nhập
          </NavLink>
          <button className="bg-red-500 text-white rounded p-2 mx-2">
            Đăng ký
          </button>
        </>
      );
    }
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
