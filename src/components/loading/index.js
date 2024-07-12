import Lottie from 'lottie-react';
import React from 'react';

import login_page from './login-page.json';
import { useSelector } from 'react-redux';
const LoadingPage = () => {
  let { isLoading } = useSelector((state) => state.loadingReducer);
  // loading : hidden ko có
  //   tắt loading : hidden
  return (
    <div
      className={`bg-black w-screen h-screen fixed z-50 ${
        isLoading ? '' : 'hidden'
      } `}
    >
      <div className="w-full h-full flex items-center justify-center">
        <Lottie className="w-48 h-48" animationData={login_page} />
      </div>
    </div>
  );
};

export default LoadingPage;
