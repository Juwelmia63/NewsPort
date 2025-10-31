import React, { Suspense } from "react";
import Categories from "./Categories";

const LeftAside = () => {
  return (
    <div className="">
      <Suspense fallback={<p>Loading...</p>}>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
