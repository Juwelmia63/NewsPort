import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navber = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Loged Out Successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 sm:py-4 w-full bg-white shadow-md">
      <div className="text-xl font-bold mb-2 sm:mb-0"></div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-2 sm:mb-0 text-sm sm:text-base">
        <NavLink to="/">
          <p className=" cursor-pointer">Home</p>
        </NavLink>
        <p className=" cursor-pointer">About</p>
        <p className=" cursor-pointer">Career</p>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <img
          src="/src/assets/user.png"
          alt="user"
          className="w-8 h-8 rounded-full"
        />

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-neutral px-4 sm:px-6 py-1 text-sm sm:text-base"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral px-4 sm:px-6 py-1 text-sm sm:text-base"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
