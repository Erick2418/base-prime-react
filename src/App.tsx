import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'primereact/button';                             
import { Menu } from 'primereact/menu';
import { classNames } from 'primereact/utils';
import AppRouter from './router/AppRouter';
function App() {
  
  const applyScale = () => {
    document.documentElement.style.fontSize = '16' + 'px';
};
   let items = [
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' }
  ];
  
    
  return (
    <div className="App">
      <header className="App-header">
      <AppRouter /> 
 

      </header>
    </div>
  );
}

export default App;
