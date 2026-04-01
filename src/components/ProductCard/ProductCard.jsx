import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductCard({tool,carts,setCarts}) {
 
  const isInCart = carts.some(item => item.id === tool.id);

  const handleClick = () => {
    if (isInCart) {
      toast.error("Item already in the cart");
      return;
    }
    setCarts([...carts, tool]);
    toast.success("Item added to cart!");
  };

  const dynamicColor = () =>{
    if(tool.badge === "New"){
      return "bg-green-200 text-green-600";
    }
    else if(tool.badge === "Hot"){
      return "bg-red-100 text-red-700";
    }
    else if (tool.badge === "Best Seller"){
      return "bg-amber-100 text-amber-700";
    }
    else if(tool.badge=== "Popular") {
      return "bg-purple-200 text-purple-700";
    }
    else if (tool.badge === "Top Rated"){
      return "bg-cyan-200 text-cyan-700";
    }
    else if (tool.badge === "Limited"){
        return "bg-orange-200 text-orange-700";
    }
  }
  
    
    return (
    <div className="relative  bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-85 ">

      {/* Badge */}
      <div className={`absolute top-4 right-4 ${dynamicColor(tool.badge)}  text-xs font-semibold px-3 py-1 rounded-full`}>
        {tool.badge}
      </div>

      {/* Product Image */}
      <div className="mb-4">
        <img src={tool.image} alt={tool.title} className="w-12 h-12 object-contain" />
      </div>

      {/* Title & Description */}
      <h2 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h2>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        {tool.description}
      </p>

      {/* Price */}
      <div className="mb-4">
        <span className="text-3xl font-extrabold text-gray-900">${tool.price}</span>
        <span className="text-sm text-gray-400 font-medium">/Mo</span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2 mb-6">
       
        {tool.features.map((feature) => (
             <li className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4 text-purple-600 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
         {feature}
        </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button 
        onClick={handleClick} 
        disabled={isInCart}
        className={`w-full font-semibold py-3 rounded-full transition-colors duration-200 ${
          isInCart 
            ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
            : 'bg-purple-600 hover:bg-purple-700 text-white'
        }`}
      >
        {isInCart ? 'Subscribed' : 'Buy Now'}
      </button>

    </div>
  );
}
