import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Header from './components/Header/Header'
import Map from './components/Map/Map';

import { getPaceData } from './api';

function App() {
 
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
