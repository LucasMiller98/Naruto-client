import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './global/GlobalStyles'
import { App } from './pages/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);