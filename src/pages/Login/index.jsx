import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

const LoginPage = () => {
  const formLogin = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    onSubmit: (value) => {
      // Được kích hoạt khi ấn submit

      console.log('value: ', value);
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required('Tài khoản k được để trống')
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'Tài khoản phải là email',
        ),
      matKhau: yup.string().required('Mật khẩu không được để trống'),
    }),
  });
  return (
    <form className="bg-white p-10 space-y-5" onSubmit={formLogin.handleSubmit}>
      <h3 className="text-2xl">Đăng Nhập</h3>
      {/* Tài khoản */}
      <div>
        <label htmlFor="">Tài khoản</label>
        <input
          onChange={formLogin.handleChange}
          type="text"
          name="taiKhoan"
          className="w-full bg-gray-300"
        />
        <p className="text-red-500 h-3">{formLogin.errors.taiKhoan}</p>
      </div>
      {/* Mật khẩu */}
      <div>
        <label htmlFor="">Mật khẩu</label>
        <input
          onChange={formLogin.handleChange}
          name="matKhau"
          type="text"
          className="w-full bg-gray-300"
        />
        <p className="text-red-500 h-3">{formLogin.errors.matKhau}</p>
      </div>
      <button className="bg-purple-500 text-white w-full rounded-md py-2">
        Đăng nhập
      </button>

      <p className="text-blue-400 underline">Đăng ký</p>
    </form>
  );
};

export default LoginPage;
