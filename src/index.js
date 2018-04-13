import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

<<<<<<< HEAD
ReactDOM.render(
  <Provider store = {store}>
    <Dashboard />
  </Provider>

, document.getElementById('root'));
=======
ReactDOM.render(<Provider store={store}><Dashboard /></Provider>, document.getElementById('root'));
>>>>>>> cf867587491df08cf02637bd3f7bdb16a14f6e81
registerServiceWorker();
