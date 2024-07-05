import axios from 'axios';
import { https } from './urlConfig';

export const userService = {
  //   postLogin: (value) => {
  //     let promise = axios({
  //       method: 'POST',
  //       url: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
  //       data: value,
  //       headers: {
  //         TokenCybersoft:
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NyIsIkhldEhhblN0cmluZyI6IjE1LzEyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTczNDIyMDgwMDAwMCIsIm5iZiI6MTcwNTU5NzIwMCwiZXhwIjoxNzM0MzY4NDAwfQ.6KzwosGeCdFyoJDkANd3FzSA5C_iSLO1L8Q903zqZ44',
  //       },
  //     });
  //     return promise;
  //   },
  postLogin: (value) => {
    let uri = '/api/QuanLyNguoiDung/DangNhap';
    return https.post(uri, value);
  },

  getInfoUser: () => {
    let uri = '/api/QuanLyNguoiDung/ThongTinTaiKhoan';

    return https.post(uri);
  },
};
