import React, { useState } from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home';
import Planets from './pages/Planets';
import Contact from './pages/Contact';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import { planetItems as PT } from './data';

function App() {
  const [planetItems, setPlanetItems] = useState(PT)
  return (
<div className="App d-flex vh-100 justify-content-between row">
    <Header />
      <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/planets' element={<Planets planetItems={planetItems}  />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
