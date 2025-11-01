import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const LoginForm = () => {
  const { googleLogin, setUser } = use(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const logedUser = result.user;
        setUser(logedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-semibold text-xl sm:text-2xl mb-3">Login With</h1>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center gap-2 mb-2 text-sm sm:text-base"
        >
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
