import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const AuthTemplate = () => {
  // login , register
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userReducer);

  useEffect(() => {
    // userInfo (redux) có dữ liệu => true => đã đăng nhập
    if (userInfo) {
      console.log('userInfo: ', userInfo);

      navigate('/');
    }
  }, []);
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default AuthTemplate;

// "" , 0 , null , undefine , -0 , false
