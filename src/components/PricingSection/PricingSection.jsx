import { use, useState } from "react";


const CheckIcon = ({ highlighted }) => (
  <svg
    className={`w-4 h-4 flex-shrink-0 ${highlighted ? "text-purple-300" : "text-purple-600"}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const PricingCard = ({ plan }) => {


  let { name, tagline, price, unit, badge, features, cta, highlighted } = plan;
    const [intial,set]=useState(name === "Pro");
    highlighted= intial;

  return (
    <div onClick={() => set(!intial)}
      className={`relative flex flex-col rounded-2xl p-8 transition-transform duration-600 hover:-translate-y-1 ${
        highlighted
          ? "bg-gradient-to-b from-purple-600 to-purple-700 text-white shadow-2xl shadow-purple-300 scale-105"
          : "bg-white border border-gray-200 text-gray-800 shadow-sm"
      }`}
    >

      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
            {badge}
          </span>
        </div>
      )}

 
      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-1 ${highlighted ? "text-white" : "text-gray-900"}`}>
          {name}
        </h3>
        <p className={`text-sm ${highlighted ? "text-purple-200" : "text-gray-500"}`}>{tagline}</p>
      </div>


      <div className="mb-8">
        <span className={`text-5xl font-extrabold ${highlighted ? "text-white" : "text-gray-900"}`}>
          ${price}
        </span>
        <span className={`text-base font-medium ml-1 ${highlighted ? "text-purple-200" : "text-gray-400"}`}>
          {unit}
        </span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5">
            <CheckIcon highlighted={highlighted} />
            <span className={`text-sm ${highlighted ? "text-purple-100" : "text-gray-600"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>


      <button
        className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
          highlighted
            ? "bg-white text-purple-700 hover:bg-purple-50"
            : "bg-purple-600 text-white hover:bg-purple-700"
        }`}
      >
        {cta}
      </button>
    </div>
  );
};

export default function PricingSection({plan}) {
  const plans = use(plan);

  
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 text-base">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-center">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}
