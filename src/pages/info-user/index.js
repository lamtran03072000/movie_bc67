import React, { useEffect } from 'react';
import { userService } from '../../services/userService';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const InfoUser = () => {
  const fetchInfoUser = async () => {
    try {
      let dataInfoUser = await userService.getInfoUser();
      console.log('dataInfoUser: ', dataInfoUser);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    // check user chưa đăng nhập thì đá về trang home

    fetchInfoUser();
  }, []);
  return <div>InfoUser</div>;
};

export default InfoUser;
