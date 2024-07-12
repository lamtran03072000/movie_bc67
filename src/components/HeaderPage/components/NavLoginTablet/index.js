import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutAction } from '../../../../redux/user/userSlice';
const NavLoginTablet = ({ userInfo }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const renderUserLogin = () => {
    if (userInfo) {
      return (
        <>
          <div>{userInfo.hoTen}</div>
          <button
            onClick={() => {
              dispatch(logOutAction());
            }}
            className="bg-red-500 text-white p-2 rounded"
          >
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <Space direction="vertical">
          <NavLink
            to={'/auth/login'}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Đăng nhập
          </NavLink>

          <div className="bg-red-500 text-white  p-2 rounded">Đăng ký</div>
        </Space>
      );
    }
  };
  return (
    <>
      <Button
        icon={<UnorderedListOutlined />}
        type="primary"
        onClick={showDrawer}
      ></Button>
      <Drawer
        placement="left"
        title={renderUserLogin()}
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default NavLoginTablet;
