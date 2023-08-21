import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
// eslint-disable-next-line no-unused-vars
import i18n from './i18next/i18n';
import GoApp from './goApp';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoApp />
  </React.StrictMode>,
);

reportWebVitals();
