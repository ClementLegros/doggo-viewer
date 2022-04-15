import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import { ThemeProvider } from './Components/ThemeContext';
import Background from './Components/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <HomePage />
      </Background>
    </ThemeProvider>
  </React.StrictMode>
);

