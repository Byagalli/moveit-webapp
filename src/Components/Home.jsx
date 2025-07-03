import React from 'react';
import HeaderUs from './Header/HeaderUs';
import SliderUs from './Slider/SliderUs';
import FeaturesUs from './Features/featuresUs';
import About from './About';
import Pricing from './Pricing';
import ContactUs from './Contact/ContactUs';

function Home() {
  return (
   <div>
    <HeaderUs />
    <SliderUs />
    <About />
    <FeaturesUs />
    <Pricing />
    <ContactUs />
   </div>
  );
}

export default Home;
