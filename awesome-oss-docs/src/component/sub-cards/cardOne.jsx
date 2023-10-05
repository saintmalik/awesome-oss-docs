import React from "react";
import { BsStar } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from "../imgs/logo.svg";

const CardOne = () => {
  return (
    <div className="flex justify-left w-full p-8 mt-8 mx-5 ">
      {/* Left Div */}
      <div className="w-2/5 mr-6">
        <h2 className="text-xl font-semibold mb-4">
          Airbnb Open Source Documentation
        </h2>
        <div className="flex">
          {/* Card 1 */}
          <div className="w-1/2 bg-white p-2 mb-4 rounded-lg border border-black mr-3">
            <div className="flex flex-col items-center">
              <img
                src={Logo}
                alt="React Logo"
                className="w-18 h-18 mb-4 mt-5"
              />
              <h3 className="text-2xl font-semibold mb-2 text-center">
                Visx Docs
              </h3>
              <div className="flex  justify-center mt-7 mb-4">
                <div className="flex items-center bg-blue-200 rounded-full px-4 py-1 mb-3">
                  {/* Star icon */}
                  <BsStar className="h-6 w-6 text-pink-500 mr-2" />
                  <span className="text-sm font-semibold mr-2">star</span>
                  <span className="text-sm font-semibold mr-2">15</span>
                  <div className="border-r border-gray-400 h-4 mx-2"></div>
                  {/* React Dropdown Icon */}
                  <BsFillCaretDownFill className="h-5 w-5 text-gray-500" />
                </div>
              </div>
              <div className="flex justify-center mt-2 mb-4">
                <button className="bg-blue-200 text-black text-sm mr-2 px-2 rounded-xl">
                  Open source
                </button>
                <button className="bg-blue-200 text-black text-sm px-2 rounded-xl">
                  Documentation
                </button>
              </div>
              <h3 className="text-black text-xl text-center mb-5">
                A collection of reusable low-level visualization components.
              </h3>
              <hr className="my-2 w-full border-black" />
              <div className="flex justify-center mt-3">
                <button className="border border-blue-500 text-sm text-blue-500 px-1 mr-4 rounded">
                  Go to Project
                </button>
                <button className="bg-green-500 text-white border text-sm border-blue-500 px-1 rounded">
                  Edit on Github
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/2 bg-white p-2 mb-4 rounded-lg border border-black flex-row">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
              Airflows Docs
            </h3>
            <div className="flex  justify-center mt-7 mb-4">
              <div className="flex items-center bg-blue-200 rounded-full px-4 py-1 mb-3">
                {/* Star icon */}
                <BsStar className="h-6 w-6 text-pink-500 mr-2" />
                <span className="text-sm font-semibold mr-2">star</span>
                <span className="text-sm font-semibold mr-2">15</span>
                <div className="border-r border-gray-400 h-4 mx-2"></div>
                {/* React Dropdown Icon */}
                <BsFillCaretDownFill className="h-5 w-5 text-gray-500" />
              </div>
            </div>

            <div className="flex justify-center mb-5">
              <button className="bg-blue-200 text-black text-sm mr-2 px-2 rounded-xl">
                Open source
              </button>
              <button className="bg-blue-200 text-black text-sm px-2 rounded-xl">
                Documentation
              </button>
            </div>
            <h3 className="text-black  text-xl text-center flex-row">
              A platform to
            </h3>
            <h3 className="text-black mb-5 text-xl text-center flex-row">
              programmatically author, schedule, and monitor workflows.
            </h3>
            <hr className="my-2 border-black w-full" />
            <div className="flex justify-center mt-4">
              <button className="border border-blue-500 text-sm text-blue-500 px-1 mr-4 rounded">
                Go to Project
              </button>
              <button className="bg-green-500 text-white border text-sm border-blue-500 px-1 rounded">
                Edit on Github
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Div */}
      <div className="w-2/5 mr-6">
        <h2 className="text-xl font-semibold mb-4">
        Apache Software Open Source Documentation
        </h2>
        <div className="flex">
          {/* Card 1 */}
          <div className="w-1/2 bg-white p-2 mb-4 rounded-lg border border-black mr-3">
            <div className="flex flex-col items-center">
              <img
                src={Logo}
                alt="React Logo"
                className="w-18 h-18 mb-4 mt-5"
              />
              <h3 className="text-2xl font-semibold mb-2 text-center">
              Apache APISIX
              </h3>
              <div className="flex  justify-center mt-3 mb-2">
                <div className="flex items-center bg-blue-200 rounded-full px-4 py-1 mb-3">
                  {/* Star icon */}
                  <BsStar className="h-6 w-6 text-pink-500 mr-2" />
                  <span className="text-sm font-semibold mr-2">star</span>
                  <span className="text-sm font-semibold mr-2">15</span>
                  <div className="border-r border-gray-400 h-4 mx-2"></div>
                  {/* React Dropdown Icon */}
                  <BsFillCaretDownFill className="h-5 w-5 text-gray-500" />
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <button className="bg-blue-200 text-black text-sm mr-2 px-2 rounded-xl">
                  Open source
                </button>
                <button className="bg-blue-200 text-black text-sm px-2 rounded-xl">
                  Documentation
                </button>
              </div>
              <h3 className="text-black text-xl text-center mb-2">
              A dynamic, real-time, high-performance API gateway, and it provides rich traffic management features
              </h3>
              <hr className="my-2 w-full border-black" />
              <div className="flex justify-center mt-3">
                <button className="border border-blue-500 text-sm text-blue-500 px-1 mr-4 rounded">
                  Go to Project
                </button>
                <button className="bg-green-500 text-white border text-sm border-blue-500 px-1 rounded">
                  Edit on Github
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/2 bg-white p-2 mb-4 rounded-lg border border-black flex-row">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold  text-center">
            Apache 
            </h3>
            <h3 className="text-2xl font-semibold mb-2 text-center">
            SkyWalking
            </h3>
            <div className="flex  justify-center mt-7 mb-4">
              <div className="flex items-center bg-blue-200 rounded-full px-4 py-1 mb-3">
                {/* Star icon */}
                <BsStar className="h-6 w-6 text-pink-500 mr-2" />
                <span className="text-sm font-semibold mr-2">star</span>
                <span className="text-sm font-semibold mr-2">15</span>
                <div className="border-r border-gray-400 h-4 mx-2"></div>
                {/* React Dropdown Icon */}
                <BsFillCaretDownFill className="h-5 w-5 text-gray-500" />
              </div>
            </div>

            <div className="flex justify-center mb-5">
              <button className="bg-blue-200 text-black text-sm mr-2 px-2 rounded-xl">
                Open source
              </button>
              <button className="bg-blue-200 text-black text-sm px-2 rounded-xl">
                Documentation
              </button>
            </div>
            <h3 className="text-black mb-4 text-xl text-center flex-row">
            Application performance monitor tool for distributed systems
            </h3>
            
            <hr className="my-2 border-black w-full" />
            <div className="flex justify-center mt-4">
              <button className="border border-blue-500 text-sm text-blue-500 px-1 mr-4 rounded">
                Go to Project
              </button>
              <button className="bg-green-500 text-white border text-sm border-blue-500 px-1 rounded">
                Edit on Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
