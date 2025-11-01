import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/public/categories.json").then((res) =>
  res.json()
);

const Categories = () => {
  const categories = use(categoriesPromise);
  // console.log(categories);

  return (
    <div>
      <p className="font-semibold text-2xl">
        All Category .{categories.length}
      </p>
      <div className="flex flex-col gap-2 mt-5">
        {categories.map((categori) => (
          <NavLink
            key={categori.id}
            className="btn border-none text-start w-full"
            to={`categorinews/${categori.id}`}
          >
            {categori.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
