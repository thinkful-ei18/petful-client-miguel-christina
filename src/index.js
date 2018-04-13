import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>

<<<<<<< HEAD
, document.getElementById('root'));
=======
  , document.getElementById('root'));
>>>>>>> f1b631dcc1fe63f77f07601b4c89678a01eb0a92
registerServiceWorker();
