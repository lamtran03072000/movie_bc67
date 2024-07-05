import { message } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// HOC là viết logic trong component này để component khác sử dụng
const Autherization = ({ children }) => {
  let { userInfo } = useSelector((state) => state.userReducer);
  console.log('userInfo: ', userInfo);
  let navigate = useNavigate();

  useEffect(() => {
    // console.log('check user đăng nhập');

    if (!userInfo) {
      navigate('/');
      message.error('Vui lòng đăng nhập');
    }
  }, [userInfo]);

  return children;
};

export default Autherization;
