import React from 'react';
import { createRoot } from 'react-dom/client';
// import Calculator from './components/Calculator';
import App from './App';
import './App.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
