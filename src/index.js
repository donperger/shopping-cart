import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import RouterSwitch from './components/RouterSwitch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RouterSwitch />
  </React.StrictMode>
);
