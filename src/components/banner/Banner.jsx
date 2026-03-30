import BannerImage from "../../assets/banner.png";
import { Play } from "lucide-react";
import './Banner.css'
const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 w-8/12">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="flex items-center bg-white">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium hover:bg-purple-100 transition-colors duration-200 cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              New: AI-Powered Tools Available
            </button>
          </div>
          <h1 className="text-4xl lg:text-7xl font-bold leading-tight ">
            Supercharge Your
            Digital Workflow
          </h1>

          <p className="text-lg text-gray-400 max-w-lg ">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button id="button" className=" universalBgColor px-5 py-4 rounded-full font-semibold text-lg shadow-xl shadow-purple-50-500/30  flex items-center gap-3 group text-white">
              Explore Products
            </button>
            <button className="flex items-center gap-2 border border-purple-600 text-purple-600 rounded-full px-5 py-2 text-lg font-semibold hover:bg-purple-50 transition-colors">
            <Play />
              Watch Demo
            </button>
          </div>

          {/* <div className="flex items-center gap-8 text-sm text-zinc-600 pt-6">
            <div>✓ 50+ Frontier Models</div>
            <div>✓ No Usage Limits</div>
            <div>✓ Cancel Anytime</div>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-140 w-auto object-contain drop-shadow-2xl rounded-3xl"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;