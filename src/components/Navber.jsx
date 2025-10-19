import React from "react";

const Navber = () => {
  return (
    <div className="flex justify-between">
      <div></div>
      <div className="flex gap-5">
        <p>Home</p>
        <p>About</p>
        <p>Career</p>
      </div>
      <div className="flex gap-4">
        <img src="/src/assets/user.png" alt="" />
        <button className="btn btn-neutral px-10">LogIn</button>
      </div>
    </div>
  );
};

export default Navber;
