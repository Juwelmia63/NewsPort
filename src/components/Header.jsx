import React from "react";
import { format } from "./../../node_modules/date-fns/format";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 gap-2">
      <img src="/src/assets/logo.png" alt="logo" className="mb-2" />
      <p className="text-gray-600 text-sm">Journalism Without Fear or Favour</p>
      <p className="text-gray-500 text-sm">
        {format(new Date(), "EEEE - MMMM - yyyy	")}
      </p>

      <div className="w-full bg-primary py-2 mt-4 flex items-center gap-2 px-4">
        <button className="bg-red-600 text-white px-3 py-1 rounded">
          Latest
        </button>

        <Marquee>
          <p className="text-gray-700 text-sm">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain sit amet consectetur adipisicing elit.
            Debitis, quo?
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
