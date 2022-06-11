import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import Store from './Store';

const RouterSwitch = () => {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </HashRouter>
  );
};

export default RouterSwitch;
