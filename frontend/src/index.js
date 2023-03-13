import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as RootRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootRouter>
      <App />
    </RootRouter>
  </React.StrictMode>
);