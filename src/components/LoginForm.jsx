import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-semibold text-xl sm:text-2xl mb-3">Login With</h1>
        <button className="btn btn-outline w-full flex items-center gap-2 mb-2 text-sm sm:text-base">
          <FcGoogle size={20} /> Login with Google
        </button>
        <button className="btn btn-outline w-full flex items-center gap-2 text-sm sm:text-base">
          <FaGithub size={20} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginForm;



