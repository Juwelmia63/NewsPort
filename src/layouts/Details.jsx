import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/RightAside";
import { Link, useLoaderData, useParams } from "react-router";
import { FaRegBookmark, FaShareAlt, FaRegEye, FaStar } from "react-icons/fa";
import Navber from "../components/Navber";

const Details = () => {
  const data = useLoaderData();

  const [detailsData, setDetailsData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const news = data.find((singleNews) => singleNews.id == id);
    setDetailsData(news);
  }, [data, id]);

  const { title, thumbnail_url, author, details, total_view, rating } =
    detailsData;

  return (
    <div>
      <header className="mb-5">
        <Header></Header>
        <Navber className=""></Navber>
      </header>

      <main className="w-11/12 mx-0 grid grid-cols-12">
        <section className="col-span-9 px-5">
          <p className="text-3xl font-bold font-poppins mb-3">News Details</p>
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
            <p className="text-gray-600 text-sm mb-3">{details}</p>
            <div className="flex justify-between items-center mt-4 border-t pt-3 text-sm">
              <div className="flex items-center gap-1">
                <FaStar className="text-orange-400" /> {rating?.number}
              </div>
              <div className="flex items-center gap-1">
                <FaRegEye /> {total_view}
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightAside></RightAside>
        </section>
      </main>
    </div>
  );
};

export default Details;
