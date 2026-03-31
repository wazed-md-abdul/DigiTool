import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ModelSection = ({ data }) => {


    const [activeTab, setActiveTab] = useState("model");
    return (
        <>

            <div className="text-center mb-14">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Premium Digital Tools
                </h1>
                <p className="text-gray-500 text-base w-4/12 mx-auto">
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
            </div>
            <div className="tabs tabs-box justify-center gap-10 bg-transparent ">
                <input
                    type="radio"
                    name="my_tabs_1"
                    className={`tab rounded-full w-50 ${activeTab === "model" && "universalBgColor text-white"}`}
                    aria-label="Models"
                    defaultChecked
                    onClick={() => setActiveTab("model")}
                />
                <input
                    type="radio"
                    name="my_tabs_1"
                    className={`tab rounded-full w-50 ${activeTab === "cart" && "universalBgColor text-white"}`}
                    aria-label={`Cart ()`}
                    onClick={() => setActiveTab("cart")}
                />
            </div>
            <div className='mt-20 items-center justify-center flex'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto ">
                    {activeTab === "model" && data.map((tool) => <ProductCard key={tool.id} tool={tool} />)}
                </div>
            </div>

        </>
    );
};

export default ModelSection;