import React, { use, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import NavBar from '../Navbar/NavBar';
import CartSection from '../CartSection/CartSection';
const ModelSection = ({ dataPromise, carts, setCarts }) => {






    const datas = use(dataPromise);


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
                    aria-label={`Cart (${carts.length})`}
                    onClick={() => setActiveTab("cart")}
                />
            </div>
            <div className='mt-20 mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto ">
                    {activeTab === "model" && datas.map((tool) => <ProductCard key={tool.id} tool={tool} setCarts={setCarts} carts={carts} />)}
                    
                </div>
                 {activeTab === "cart" && <CartSection carts={carts} setCarts={setCarts} />}

            </div>

        </>
    );
};

export default ModelSection;