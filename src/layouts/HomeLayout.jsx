import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Navber from "../components/Navber";
import LeftAside from "../components/LeftAside";
import RightAside from "../components/RightAside";

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
        <section className="right-side  col-span-3">
          <aside>
            <RightAside></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
