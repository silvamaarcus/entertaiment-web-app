"use client";

import React from "react";

import SearchIcon from "@mui/icons-material/Search";

import CardBig from "../../components/CardBig";

const SectionHome = () => {
  const cardsBig = [
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      alt: "image 1",
      title: "Title 1",
      description: {
        year: 2023,
        type: "Movie",
        classification: "PG",
      },
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      alt: "image 2",
      title: "Title 2",
      description: {
        year: 2023,
        type: "Movie",
        classification: "PG",
      },
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      alt: "image 3",
      title: "Title 3",
      description: {
        year: 2023,
        type: "Movie",
        classification: "PG",
      },
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      alt: "image 4",
      title: "Title 4",
      description: {
        year: 2023,
        type: "Movie",
        classification: "PG",
      },
    },
  ];

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
        <h1 className="text-3xl font-light">Trending</h1>
        <div className="my-6 flex items-center overflow-x-auto gap-10 w-full custom-scrollbar">
          {cardsBig.slice(0, 4).map((card, index) => (
            <div
              className="w-[240px] h-[140px] sm:w-[470px] sm:h-[300px] flex-shrink-0"
              key={index}
            >
              <CardBig
                src={card.src}
                alt={card.alt}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionHome;
