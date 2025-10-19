import React from "react";
import { FaRegBookmark, FaShareAlt, FaRegEye, FaStar } from "react-icons/fa";

const CategoriNewsCard = ({ data }) => {
  const { title, thumbnail_url, author, details, total_view, rating } = data;

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 object-cover rounded-full"
          />
          <div>
            <h3 className="font-semibold">{author?.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 text-lg cursor-pointer">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>
      <h2 className="font-bold text-xl mb-4">{title}</h2>
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full rounded-lg object-cover mb-4"
      />
      <p className="text-gray-600 text-sm mb-3">
        {details.length > 200 ? details.slice(0, 200) + "..." : details}
        <span className="text-orange-500 font-medium cursor-pointer">
          {" "}
          Read More
        </span>
      </p>
      <div className="flex justify-between items-center mt-4 border-t pt-3 text-sm">
        <div className="flex items-center gap-1">
          <FaStar className="text-orange-400" /> {rating?.number}
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default CategoriNewsCard;
