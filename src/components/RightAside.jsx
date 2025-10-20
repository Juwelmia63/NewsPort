import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import LoginForm from "./LoginForm";

const RightAside = () => {
  return (
    // login form start
    <div className="space-y-6">
      <LoginForm></LoginForm>

      <div>
        <h1 className="font-semibold text-xl sm:text-2xl mb-3">Find Us On</h1>
        <div className="flex flex-col gap-2">
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer text-sm sm:text-base">
            <FaFacebookF /> Facebook
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer text-sm sm:text-base">
            <FaTwitter /> Twitter
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer text-sm sm:text-base">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h1 className="font-semibold text-xl sm:text-2xl mb-3">Q-Zone</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          <img
            src="/src/assets/swimming.png"
            alt=""
            className="w-full h-auto rounded"
          />
          <img
            src="/src/assets/class.png"
            alt=""
            className="w-full h-auto rounded"
          />
          <img
            src="/src/assets/playground.png"
            alt=""
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      <div className="relative w-full h-[400px] sm:h-[620px] rounded-lg overflow-hidden">
        <img
          src="/src/assets/bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-5 text-white bg-black bg-opacity-40">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Create an Amazing News
          </h2>
          <p className="text-xs sm:text-sm mb-4 leading-relaxed">
            The best way to get authentic news from trusted journalists.
          </p>
          <button className="btn btn-error text-white px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightAside;
