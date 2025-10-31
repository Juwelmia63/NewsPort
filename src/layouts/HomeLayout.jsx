import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Navber from "../components/Navber";
import LeftAside from "../components/LeftAside";
import RightAside from "../components/RightAside";

const HomeLayout = () => {
  return (
    <div className="container mx-auto poppins-regular px-4">
      <header>
        <Header />
        <Navber />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 h-[calc(100vh-200px)] overflow-hidden">
        <section className="left-side hidden md:block md:col-span-3 overflow-y-auto sticky top-0 h-[calc(100vh-200px)]">
          <LeftAside />
        </section>

        <section className="col-span-1 md:col-span-6 overflow-y-auto ">
          <Outlet />
        </section>

        <section className="right-side hidden md:block md:col-span-3 overflow-y-auto sticky top-0 h-[calc(100vh-200px)]">
          <RightAside />
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
