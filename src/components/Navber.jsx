import React from "react";

const Navber = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 sm:py-4 w-full bg-white shadow-md">
      <div className="text-xl font-bold mb-2 sm:mb-0"></div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-2 sm:mb-0 text-sm sm:text-base">
        <p className="hover:text-primary cursor-pointer">Home</p>
        <p className="hover:text-primary cursor-pointer">About</p>
        <p className="hover:text-primary cursor-pointer">Career</p>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <img
          src="/src/assets/user.png"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
        <button className="btn btn-neutral px-4 sm:px-6 py-1 text-sm sm:text-base">
          LogIn
        </button>
      </div>
    </div>
  );
};

export default Navber;
