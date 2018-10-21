import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(

  <Provider store={store}>
      <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  , document.getElementById('root'));