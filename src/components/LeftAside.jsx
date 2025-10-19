import React, { Suspense } from "react";
import Categories from "./Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
