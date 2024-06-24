import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthTemplate from './template/AuthTemplate';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomeTemplate from './template/HomeTemplate';
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home template */}
        {/* localhost:3000 */}
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
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
