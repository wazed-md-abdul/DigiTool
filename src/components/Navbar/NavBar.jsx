import React, { useState } from 'react';
import './NavBar.css'
import { ShoppingCart, Menu, X } from 'lucide-react'

const NavBar = () => {
  const css = "bg-gradient-to-l from-purple-500 to-purple-800 bg-clip-text text-transparent"
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar w-full md:w-8/12 mx-auto  ">
        <div className="navbar-start">
          <div className="flex items-center gap-1 font-bold text-3xl md:text-5xl ">
            <span className={css}>D</span> <span className={css} >I</span> <span className={css}>G</span> <span className={css}>I</span> <span className={css}>T</span> <span className={css}>O</span> <span className={css}>O</span> <span className={css}>L</span>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-3 font-medium px-1 text-base">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 md:gap-5">
          
          <button className='btn bg-white text-sm md:text-lg p-3 md:p-6 border-none font-extralight rounded-full'><div className='mr-2 relative'><a className=' btn rounded-full h-4 w-4 md:h-5 md:w-5 p-2 md:p-3 text-xs md:text-md text-white bg-red-600 -top-2 md:-top-3.5 absolute'>0</a>< ShoppingCart size={16} className="md:w-5 md:h-5" /></div>Login</button>
          <a className="btn text-sm md:text-lg p-3 md:p-6 universalBgColor rounded-full text-white">Get Started</a>

        </div>

      </div>
      <div className='border-b text-gray-200 my-4'></div>
    </>
  );
};

export default NavBar;