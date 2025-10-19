import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import CategoriNewsCard from "./CategoriNewsCard";

const CategoriNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setFilterData(newsData);
      return;
    } else if (id == "1") {
      const filterData = newsData.filter(
        (news) => news.others.is_today_pick === true
      );
      setFilterData(filterData);
    } else {
      const filterData = newsData.filter((news) => news.category_id == id);
      setFilterData(filterData);
    }
  }, [id, newsData]);

  return (
    <div className="px-5">
      <h1 className="font-semibold text-2xl">News Home {filterData.length}</h1>
      {filterData.map((data) => (
        <CategoriNewsCard key={data.id} data={data}></CategoriNewsCard>
      ))}
    </div>
  );
};

export default CategoriNews;
