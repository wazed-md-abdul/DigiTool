import React from 'react'
import Facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'

import Instagram from '../../assets/Instagram.png'


const Footer = () => {


    return (
        <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    <div className="md:col-span-5">
                        <div className="flex gap-3 mb-6">
                            <h2 className="text-5xl font-bold tracking-widest text-white">
                                DigiTools
                            </h2>
                        </div>

                        <p className="text-zinc-400 text-lg max-w-md">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>

                    </div>


                    <div className="md:col-span-1">
                        <h3 className="text-white font-medium mb-6 text-xl">Product</h3>
                        <ul className="space-y-4 text-white">
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    Templates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 ml-3">
                        <h3 className="text-white font-medium mb-6 text-xl">Company</h3>
                        <ul className="space-y-4 text-white">
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white font-medium mb-6 text-xl">Resources</h3>
                        <ul className="space-y-4 text-white">
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-zinc-400 transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 text-white">
                        <h3 className="text-white font-medium mb-6 text-xl">Social Links</h3>
                        <ul className='flex gap-2'>
                            <li><img src={Facebook} alt="" /></li>
                            <li><img src={Twitter} alt="" /></li>
                            <li><img src={Instagram} alt=""/></li>
                        </ul>
                        
                    </div>
                </div>


                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>

                    <div className="flex gap-6">
                        <a href="">Privacy Policy</a> 
                        <a href="">Terms Of Services</a>
                        <a href=""> Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;