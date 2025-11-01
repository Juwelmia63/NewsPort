import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import CategoriNewsCard from "./CategoriNewsCard";

const CategoriNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (!Array.isArray(newsData)) {
      setFilterData([]);
      return;
    }

    if (id === "0") {
      setFilterData(newsData);
    } else if (id === "1") {
      const filtered = newsData.filter(
        (news) => news?.others?.is_today_pick === true
      );
      setFilterData(filtered);
    } else {
      const filtered = newsData.filter(
        (news) => news?.category_id && news.category_id.toString() === id
      );
      setFilterData(filtered);
    }
  }, [id, newsData]);

  if (!Array.isArray(newsData)) {
    return <p className="text-red-500">No news data found!</p>;
  }

  return (
    <div className="px-5">
      <h1 className="font-semibold text-2xl mb-3">
        News Home ({filterData.length})
      </h1>
      {filterData.length > 0 ? (
        filterData.map((data) => (
          <CategoriNewsCard key={data.id} data={data}></CategoriNewsCard>
        ))
      ) : (
        <p className="text-gray-500">No news found for this category.</p>
      )}
    </div>
  );
};

export default CategoriNews;
