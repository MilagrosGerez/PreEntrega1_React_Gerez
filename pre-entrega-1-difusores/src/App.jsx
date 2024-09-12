import { useState } from 'react';

import './App.css'
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='Bienvenido a Jazmín Aromas.' />
    </div>
  );
}

export default App;
