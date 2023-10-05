import React from "react";
import { BsStar } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from "../imgs/logo.svg";

const CardThree = () => {
  return (
    <div className="flex justify-left w-full p-6 mt-4 mx-5 ">
      <div className="w-screen mr-6">
        <h2 className="text-xl font-semibold mb-4">
        Facebook Open Source Documentation
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
          {/* Card 1 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black mr-3">
            <div className="flex flex-col items-center">
              <img
                src={Logo}
                alt="React Logo"
                className="w-18 h-18 mb-4 mt-5"
              />
              <h3 className="text-2xl font-semibold mb-2 text-center">
              React Native
              </h3>
              <div className="flex  justify-center mt-6 mb-3">
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
              <h3 className="text-black text-xl text-center mt-3 mb-10">
              A framework for building native apps with React.
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
          <div className="bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Draftjs Docs 
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black  text-xl text-center flex-row mb-10 mt-16">
            A React framework for building text editors
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
          {/* Card 3 */}
          <div className="bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            React Docs 
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-10 mt-16 text-xl text-center flex-row">
            A JavaScript library for building user interfaces
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
          {/* Card 4 */}
          <div className="bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Create React App Docs
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-6 text-xl text-center flex-row">
            Set up a modern React web app by running one command.
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
          {/* Card 5 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Hermes Docs
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-10 mt-9 text-xl text-center flex-row">
            A JavaScript engine optimized for running React Native
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
          {/* Card 6 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Flipper Docs 
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-10 mt-10 text-xl text-center flex-row">
            A desktop debugging platform for mobile developers.
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
          {/* Card 7 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            PyTorch Docs 
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-5 mt-8 text-xl text-center flex-row">
            Tensors and Dynamic neural networks in Python with strong GPU acceleration.
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
          {/* Card 8 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Fresco Docs
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-10 mt-10 text-xl text-center flex-row">
            An Android library for managing images and the memory they use.
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
          {/* Card 9 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Litho Docs
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-10 mt-10 text-xl text-center flex-row">
            A declarative framework for building efficient UIs on Android.
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
          {/* Card 10 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            WRedex Docs 
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-11 mt-16 text-xl text-center flex-row">
            A bytecode optimizer for Android apps
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
          {/* Card 11 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Relay Docs
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-9 mt-10 text-xl text-center flex-row">
            Relay is a JavaScript framework for building data-driven React applications
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
          {/* Card 12 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Jestjs Docs
            </h3>
            <div className="flex  justify-center mt-8 mb-6">
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
            <h3 className="text-black mb-12 mt-20 text-xl text-center flex-row">
            Delightful JavaScript Testing
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
          {/* Card 13 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Hydra Docs 
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-9 mt-10 text-xl text-center flex-row">
            Hydra is a framework for elegantly configuring complex applications.
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
          {/* Card 14 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            ParlAI Docs 
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-7 text-xl text-center flex-row">
            A framework for training and evaluating AI models on a variety of openly available dialogue datasets.
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
          {/* Card 15 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            FBT Docs
            </h3>
            <div className="flex  justify-center mt-5 mb-4">
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
            FBT is an internationalization framework for JavaScript designed to be not just powerful and flexible.
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
          {/* Card 16 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            RocksDB Docs
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-5 text-xl text-center flex-row">
            A storage engine with key/value interface, where keys and values are arbitrary byte streams. It is a C++ library. 
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
          {/* Card 17 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Docusaurus Docs 
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-20 mt-11 text-xl text-center flex-row">
            Easy to maintain open source documentation websites.
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
          {/* Card 18 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Flux Docs 
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-20 mt-11 text-xl text-center flex-row">
            Application Architecture for Building User Interfaces.
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
          {/* Card 19 */}
          <div className=" bg-white p-2 mb-4 rounded-lg border border-black flex-row mr-3">
            <img
              src={Logo}
              alt="React Logo"
              className="w-18 h-18 mx-auto mb-4 mt-5"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">
            Flow Docs
            </h3>
            <div className="flex  justify-center mt-7 mb-6">
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
            <h3 className="text-black mb-10 mt-14 text-xl text-center flex-row">
            Adds static typing to JavaScript to improve developer productivity and code quality
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

export default CardThree;
