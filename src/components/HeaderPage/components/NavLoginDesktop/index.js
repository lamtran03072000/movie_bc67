import React from 'react';
import { logOutAction } from '../../../../redux/user/userSlice';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const NavLoginDesktop = ({ userInfo }) => {
  const dispatch = useDispatch();
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

export default NavLoginDesktop;
