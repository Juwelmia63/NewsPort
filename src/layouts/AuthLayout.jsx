import React from "react";
import Navber from "../components/Navber";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navber></Navber>
      </header>

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
