
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from "./components/navbar/Nabar";
import { Inicio } from './components/cuerpos/inicio';
import { ArticulosProvider } from './components/context/providerArticulos';
import { CarritoFinal } from './components/navbar/carritoFinal';
import { RopaInterior } from './components/jDatos/ropaInterior';
import { TrajesDeBaño } from './components/jDatos/tajesDebaño';


function App() {

 

  const [cuerpo, setCuerpo] = useState('Trajes de Baños');


  return (
    <div className="App">
      <Router>
        <ArticulosProvider>
          <Navbar cuerpo={cuerpo} setCuerpo={setCuerpo} />

          <Routes>
            <Route path="/" element={<Navigate to="/Ropainterior" />} />
            <Route path="/carritoFinal" element={<CarritoFinal />} />
            <Route path="/Ropainterior" element={<RopaInterior />} />
            <Route path="/Trajebaño" element={<TrajesDeBaño />} />
          </Routes>

        </ArticulosProvider>
      </Router>
    </div>
  );
}

export default App;
