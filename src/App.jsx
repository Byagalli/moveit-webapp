import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import FooterUs from "./Components/Footer/FooterUs";
import FeaturesUs from "./Components/Features/featuresUs";
import Pricing from './Components/Pricing';
import About from "./Components/About";
import Login from './Components/Auth/Login';  
import Signup from './Components/Auth/Signup';
import ContactUs from './Components/Contact/ContactUs';
import GetQuote from './Components/Contact/GetQuote'; // Import the GetQuote component
// import Moving from './Components/Moving'; // Placeholder for Moving component
// import Storage from './Components/Storage'; // Placeholder for Storage component



function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FeaturesUs" element={<FeaturesUs />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
         <Route path="/quote" element={<GetQuote />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Moving" element={<h1>Moving Services</h1>} /> {/* Placeholder for Moving component */}
        <Route path="/Storage" element={<h1>Storage Services</h1>} />

       
      </Routes>
      <FooterUs />
    </>
  );
}

export default App;
