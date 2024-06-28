import { https } from './urlConfig';

export const movieService = {
  getBanner: () => {
    let uri = '/api/QuanLyPhim/LayDanhSachBanner';

    return https.get(uri);
  },
};
