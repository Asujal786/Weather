import './App.css';
import Cards from './components/Cards';
import Navabar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Services from './components/Services';
import About from './components/About';
import { BrowserRouter } from 'react-router-dom';



function App() {
    const [Location, SetLocation] = useState("Sydney");

    function gg(data) {
        SetLocation(data);
        console.log(Location);
    }
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<div> <Navabar getData={gg} /> <Cards currentlocation={Location} /> <Footer />  </div>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App;
