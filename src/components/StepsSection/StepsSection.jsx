import React from 'react'
import Rocket from '/assets/rocket.png'
import User from '/assets/user.png'
import Package from '/assets/package.png'

const StepsSection =() => {
  return (
    <section className="bg-gray-50 py-20 px-6">

      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-base">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {/* Card 1 */}
        <div className="relative bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-1 right-5 bg-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
            01
          </div>
          <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
            <img src={User}alt="Create Account" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">Create Account</h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-1  right-5 bg-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
            02
          </div>
          <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
            <img src={Package} alt="Choose Products" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">Choose Products</h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-1  right-5 bg-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
            03
          </div>
          <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
            <img src={Rocket} alt="Start Creating" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">Start Creating</h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </section>
  );
}
export default StepsSection;