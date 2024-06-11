import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <PrimeReactProvider>
      <PrimeReactContext.Provider value={{ ripple: true }}>
        <App />
      </PrimeReactContext.Provider>
    </PrimeReactProvider>
  </BrowserRouter> 
  
);

 