import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import Store from './Store';

const RouterSwitch = () => {
  return (
    <BrowserRouter basename="https://donperger.github.io/shopping-cart">
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;
