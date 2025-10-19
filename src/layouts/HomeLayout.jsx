import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Navber from "../components/Navber";
import LeftAside from "../components/LeftAside";

const HomeLayout = () => {
  return (
    <div className="container mx-auto poppins-regular">
      <header>
        <Header></Header>

        <Navber></Navber>
      </header>
      <main className="grid grid-cols-12 mt-10">
        {/* left aside section start  */}
        <section className="left-side  col-span-3">
          <LeftAside></LeftAside>
        </section>

        <section className=" col-span-6">
          <Outlet></Outlet>
        </section>

        {/* right aside section start */}
        <section className="right-side border-2 col-span-3">
          <p>right ber</p>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
