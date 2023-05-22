import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
