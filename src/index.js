import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import AllContextProvider from './context/AllContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AllContextProvider>
        <App />
      </AllContextProvider>
    </HashRouter>
  </React.StrictMode>
);

