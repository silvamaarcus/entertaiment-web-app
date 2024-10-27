"use client";

import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import CardBig from "../../components/CardBig";

const SectionHome = () => {
  return (
    <section>
      <div className="flex items-center gap-6">
        <SearchIcon className="w-8 h-8 mt-2" />
        <input
          type="text"
          className="custom-input py-2 pl-4"
          placeholder="Search for movies or TV series"
        />
      </div>

      <div className="mt-9">
        <h1 className="text-3xl font-normal">Trending</h1>
        <div className="my-6 grid grid-cols-3 gap-10">
          <CardBig
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="image"
            title="Title"
            description={{
              year: 2023,
              type: "Movie",
              classification: "PG",
            }}
          />
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default SectionHome;
