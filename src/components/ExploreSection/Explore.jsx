import React from 'react';

const Explore = () => {
    return (
        <div>
            <div className='w-full h-2/6 universalBgColor py-3 md:py-20 '>
                <div className='w-7/12 mx-auto flex flex-col justify-center text-center gap-8 text-white py-16' >
                    <h1 className='text-3xl md:text-6xl font-semibold'>Ready to Transform Your Workflow?</h1>
                     <h3 className='md:text-xl text-sm font-medium text-gray-400 w-8/12 mx-auto'>
                            Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
                     </h3>
                    <div className='flex mx-auto gap-3 md:flex-row flex-col '>
                        <button className='bg-white px-5 py-4 rounded-full font-semibold text-lg shadow-xl shadow-purple-50-500/30  flex items-center mx-auto gap-3 group text-purple-600'>Explore Products</button>
                        <button className='px-5 py-4 rounded-full font-semibold text-lg shadow-xl shadow-purple-50-500/30  flex items-center mx-auto gap-3 group text-white border-1 border-white'> View Pricing </button>
                    </div>
                    <h3 className='md:text-xl text-sm font-medium text-gray-400 w-8/12 mx-auto'>
                            14-day free trial • No credit card required • Cancel anytime
                     </h3>
                </div>

            </div>
        </div>
    );
};

export default Explore;