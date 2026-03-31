import { useState, Suspense } from 'react'
import NavBar from './components/Navbar/NavBar.jsx'
import Banner from './components/banner/Banner.jsx'
import Reviewsection from './components/banner/Reviewsection.jsx'
import Footer from './components/Footer/Footer.jsx'
import Explore from './components/ExploreSection/Explore.jsx'
import PricingSection from './components/PricingSection/PricingSection.jsx'
import StepsSection from './components/StepsSection/StepsSection.jsx'
import ModelSection from './components/ModelSection/ModelSection.jsx'
import './App.css'

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

const res = await fetch('/plan.json');
const plan = await res.json();


    const res2 = await fetch('/tools.json');
    const data = await res2.json();


function App() {




  return (
    <>
      <NavBar />
      <Banner />
      <Reviewsection />
      <Suspense fallback={<span class="loading loading-spinner text-primary"></span>} > <ModelSection data={data}></ModelSection></Suspense>
      
      <StepsSection />
      <Suspense fallback={<span class="loading loading-spinner text-primary"></span>} > <PricingSection plan={plan} /></Suspense>
      <Explore />
      <Footer />
    </>
  );
}

export default App
