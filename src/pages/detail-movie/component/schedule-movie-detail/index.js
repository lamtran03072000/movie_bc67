import { Image, Tabs } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const ScheduleMovieDetail = ({ refScheduleDetailMovie }) => {
  let { scheduleDetailMovie } = useSelector((state) => state.movieReducer);
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'đây là tab 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'đây là tab 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  const renderListRapChieuByCumRap = (listRapChieu) => {
    console.log('listRapChieu: ', listRapChieu);
    return listRapChieu.map((rapChieu) => {
      return (
        <div>
          <h3>{rapChieu.tenCumRap}</h3>
          <div>
            {rapChieu.lichChieuPhim.map((lichChieu) => {
              return (
                <button className="bg-blue-400 text-white rounded p-2 mx-2">
                  {lichChieu.ngayChieuGioChieu}
                </button>
              );
            })}
          </div>
        </div>
      );
    });
  };

  const renderListCumRap = () => {
    return scheduleDetailMovie.map((cumRap, index) => {
      return {
        key: index,
        label: <Image preview={false} src={cumRap.logo} width={50} />,
        children: renderListRapChieuByCumRap(cumRap.cumRapChieu),
      };
    });
  };
  return (
    <div className="w-4/5 mx-auto" ref={refScheduleDetailMovie}>
      <Tabs defaultActiveKey="1" items={renderListCumRap()} />
    </div>
  );
};

export default ScheduleMovieDetail;
