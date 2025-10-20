import React from "react";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center py-4 sm:py-6 gap-2 px-4 sm:px-0">
      <img
        src="/src/assets/logo.png"
        alt="logo"
        className="mb-2 w-32 sm:w-40 md:w-48"
      />
      <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center">
        Journalism Without Fear or Favour
      </p>
      <p className="text-gray-500 text-xs sm:text-sm md:text-base text-center">
        {format(new Date(), "EEEE - MMMM - yyyy")}
      </p>

      <div className="w-full bg-primary py-2 mt-4 flex items-center gap-2 px-2 sm:px-4 overflow-hidden">
        <button className="bg-red-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">
          Latest
        </button>

        <Marquee className="text-xs sm:text-sm md:text-base whitespace-normal">
          <p className="text-gray-700">
            Match Highlights: Germany vs Spain — as it happened! Match
            Highlights: Germany vs Spain sit amet consectetur adipisicing elit.
            Debitis, quo?
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
