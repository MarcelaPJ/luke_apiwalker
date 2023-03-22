import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import People from './components/People';
import Films from './components/Films';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Species from './components/Species';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Menu />
        </div>
        <Routes>
          <Route path="/people/:id" element={<People />} />
          <Route path="/films/:id" element={<Films />} /> 
          <Route path="/starships/:id" element={<Starships />} />
          <Route path="/vehicles/:id" element={<Vehicles />} />
          <Route path="/species/:id" element={<Species />} />
          <Route path="/planets/:id" element={<Planets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
