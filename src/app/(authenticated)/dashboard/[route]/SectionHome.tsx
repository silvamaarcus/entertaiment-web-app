"use client";

import React from "react";

import SearchIcon from "@mui/icons-material/Search";

import CardBig from "@/components/CardBig";
import CardSmall from "@/components/CardSmall";

const SectionHome = () => {
  const cards = [
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
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      alt: "image 5",
      title: "Title 5",
      description: {
        year: 2023,
        type: "Movie",
        classification: "PG",
      },
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      alt: "image 6",
      title: "Title 6",
      description: {
        year: 2023,
        type: "Movie",
        classification: "PG",
      },
    },
  ];

  return (
    <>
      <section>
        <div className="flex items-center gap-4 sm:mt-2 sm:gap-6">
          <SearchIcon className="mt-2 h-8 w-8" />
          <input
            type="text"
            className="custom-input py-2 pl-4"
            placeholder="Search for movies or TV series"
          />
        </div>

        <div className="mt-6 border border-red-400 sm:mt-10">
          <h1 className="text-xl font-light sm:text-3xl">Trending</h1>
          <div className="custom-scrollbar my-4 flex w-screen items-center gap-4 overflow-x-auto border sm:my-6 sm:gap-10">
            {cards.slice(0, 6).map((card, index) => (
              <div key={index}>
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

      <section className="mt-6 overflow-hidden sm:mt-10">
        <h1 className="text-xl font-light sm:text-3xl">Recommended for you</h1>
        <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* <div className="my-6 flex items-center gap-4"> */}
          {cards.map((card, index) => (
            <div className="border" key={index}>
              <CardSmall
                src={card.src}
                alt={card.alt}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionHome;
