import React, { useState } from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/home/Home';
import Planets from './pages/planets/Planets';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import { Routes, Route } from 'react-router-dom';
import { planetItems as PT } from './data';

function App() {
  const [planetItems] = useState(PT)
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
