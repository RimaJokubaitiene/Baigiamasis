import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddFlower from './components/AddFlower';
import About from './components/About';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/add-flower" element={<AddFlower />} />
            </Routes>
        </Router>
    );
};

export default App;