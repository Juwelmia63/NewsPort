import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const RightAside = () => {
  return (
    <div className="space-y-6">
      {/* Login Section */}
      <div className="mb-6">
        <h1 className="font-semibold text-2xl mb-3">Login With</h1>

        <button className="btn btn-outline w-full flex items-center gap-2 mb-2">
          <FcGoogle size={20} /> Login with Google
        </button>

        <button className="btn btn-outline w-full flex items-center gap-2">
          <FaGithub size={20} /> Login with Github
        </button>
      </div>

      {/* ✅ Find Us On - Redesigned */}
      <div>
        <h1 className="font-semibold text-2xl mb-3">Find Us On</h1>

        <div className="flex flex-col gap-2">
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaFacebookF /> Facebook
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaTwitter /> Twitter
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h1 className="font-semibold text-2xl mb-3">Q-Zone</h1>
        <div className="space-y-4">
          <img src="/src/assets/swimming.png" alt="" />
          <img src="/src/assets/class.png" alt="" />
          <img src="/src/assets/playground.png" alt="" />
        </div>
      </div>

      <div className="relative w-full h-[620px] rounded-lg overflow-hidden">
        <img
          src="/src/assets/bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-5 text-white bg-black bg-opacity-40">
          <h2 className="text-3xl font-bold mb-2">Create an Amazing News</h2>
          <p className="text-sm mb-4 leading-relaxed">
            The best way to get authentic news from trusted journalists.
          </p>
          <button className="btn btn-error text-white px-6">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightAside;
