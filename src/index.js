import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store/store';
import App from './components/App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
      <PersistGate loading={null} persistor={store}>
        <App />
      </PersistGate>
    </BrowserRouter>,
  document.getElementById('root')
);
