import React from 'react';

const Reviewsection = () => {
    return (
        <>
            <div className='w-full h-auto universalBgColor my-8'>
                <div className='w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-4 md:gap-0 text-white py-8 sm:py-12 md:py-16 px-4' >
                    <div className='flex flex-col justify-center items-center w-full sm:w-auto'>
                        <h1 className=' text-4xl sm:text-5xl md:text-7xl font-bold  '>
                            50k+
                    </h1>
                        <p className='md:text-xl text-sm sm:text-base font-medium text-gray-300'>
                            Active Users
                        </p>
                    </div>
                    <div className='border-x-0 sm:border-x-2 px-0 sm:px-8 md:px-16 border-gray-400 flex flex-col justify-center items-center w-full sm:w-auto'>
                        <h1 className=' text-4xl sm:text-5xl md:text-7xl font-bold'>
                                200+
                        </h1>
                        <p className='md:text-xl text-sm sm:text-base font-medium text-gray-300'>
                            Premium Tools
                        </p>
                    </div>
                    <div className=' flex flex-col justify-center items-center w-full sm:w-auto'>
                        <h1 className=' text-4xl sm:text-5xl md:text-7xl font-bold'>
                            4.9
                        </h1>
                        <p className='md:text-xl text-sm sm:text-base font-medium text-gray-300'>
                            Rating
                        </p>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Reviewsection;