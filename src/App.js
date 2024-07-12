import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthTemplate from './template/AuthTemplate';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomeTemplate from './template/HomeTemplate';
import HomePage from './pages/Home';
import DetailMovie from './pages/detail-movie';
import TicketRoom from './pages/ticket-room';
import InfoUser from './pages/info-user';
import Autherization from './HOC/autherization';
import LoadingPage from './components/loading';

// break poin => desktop : > 1000px , tablet : < 1000 px , > 300px , mobile < 300px
// giờ code cái modal thì phải làm sao ?
function App() {
  return (
    <BrowserRouter>
      {/*  */}
      <LoadingPage />
      <Routes>
        {/* home template */}
        {/* localhost:300/detail-movie */}
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          {/* detail-movie/123 */}
          <Route path="detail-movie/:idMovie" element={<DetailMovie />} />
          <Route path="ticket-room/:idSchedule" element={<TicketRoom />} />
          <Route
            path="info-user"
            element={
              <Autherization>
                <InfoUser />
              </Autherization>
            }
          />
        </Route>
        {/* auth template */}
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
