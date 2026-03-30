import { useState } from 'react'
import NavBar from './components/Navbar/NavBar.jsx'
import Banner from './components/banner/Banner.jsx'
import Reviewsection from './components/banner/Reviewsection.jsx'
import Footer from './components/Footer/Footer.jsx'
import Explore from './components/ExploreSection/Explore.jsx'
import PricingSection from './components/PricingSection/PricingSection.jsx'
import StepsSection from './components/StepsSection/StepsSection.jsx'
import './App.css'

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

  function App(){
      

    return (
    <>
      <NavBar/>
      <Banner/>
      <Reviewsection/>
      <StepsSection/>
      <PricingSection/>
      <Explore/>
      <Footer/>
      </>
    );
  }

export default App
