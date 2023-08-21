import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const GoApp = () => (
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </Provider>
);

export default GoApp;
