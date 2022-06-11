import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import Store from './Store';

const RouterSwitch = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
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
