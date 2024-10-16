import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import App from './App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
