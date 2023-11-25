import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const store = createStore(reducer, applyMiddleware(thunk, logger))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
