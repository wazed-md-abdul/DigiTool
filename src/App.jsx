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
import { ToastContainer } from 'react-toastify';

import React from 'react';
const res = await fetch('/plan.json');
const plan =res.json();


    const res2 = await fetch('/tools.json');
  const data = res2.json();  


function App() {
const dataPromise = data;

  const [carts, setCarts] = useState([]);
  
  const length = carts.length



  return (
    <>
      <NavBar length={length} />
      <Banner />
      <Reviewsection />
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>} > <ModelSection  dataPromise={dataPromise}  carts={carts} setCarts={setCarts} ></ModelSection></Suspense>
      <StepsSection />
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>} > <PricingSection plan={plan} /></Suspense>
      <Explore />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App
