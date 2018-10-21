import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(

    <HashRouter>
  <Provider store={store}>
      <App />
  </Provider>
    </HashRouter>
  , document.getElementById('root'));