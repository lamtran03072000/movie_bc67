import { https } from './urlConfig';

export const movieService = {
  getBanner: () => {
    let uri = '/api/QuanLyPhim/LayDanhSachBanner';

    return https.get(uri);
  },

  getListMovie: () => {
    let uri = '/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03';
    return https.get(uri);
  },
  getDetailMovie: (idMovie) => {
    // query maPhong , MaPhim
    let uri = `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`;

    return https.get(uri);
  },
  getScheduleDetailMovie: (idMovie) => {
    // query maPhong , MaPhim
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`;

    return https.get(uri);
  },

  getListDataTicketRoom: (idSchedule) => {
    let uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idSchedule}`;

    return https.get(uri);
  },
};

// useMeMo , useCallBack, useEffect , dom thật khác dom ảo (visual dom)

// hoisting , closesure function , microtask , macrotask (event loop)

// có mấy loại storage : section , cookie , localstorage  => (khác)

// var, let ,const =>
