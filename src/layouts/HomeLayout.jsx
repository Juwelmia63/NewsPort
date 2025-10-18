import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <div className="container mx-auto poppins-regular">
      <header>
        <Header></Header>
      </header>
      <main>
        <section className="left-side">
          <p>left ber</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
            impedit.
          </p>
        </section>
        <section>
          <Outlet></Outlet>
        </section>
        <section className="right-side">
          <p>right ber</p>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
