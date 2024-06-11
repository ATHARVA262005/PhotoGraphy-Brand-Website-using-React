import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Portraits from './pages/Portraits/Portraits';
import Family from './pages/Family/Family';
import Maternity from './pages/Maternity/Maternity';
import Commercial from './pages/Commercial/Commercial';

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/portraits" element={<Portraits />} />
            <Route path="/portfolio/family" element={<Family />} />
            <Route path="/portfolio/maternity" element={<Maternity />} />
            <Route path="/portfolio/commercial" element={<Commercial />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
