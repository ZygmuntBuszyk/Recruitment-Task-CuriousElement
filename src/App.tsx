import React from 'react';
import './App.css';
import 'mapbox-gl/src/css/mapbox-gl.css';
import { Accordion } from '../src/components/Accordion/Accordion'
// import { Accordion } from './components/Accordion/Accordion'; 
import { ContextProvider } from './components/Accordion/_context/MarkersState';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Accordion />
      </ContextProvider>
  
    </div>
  );
}

export default App;
