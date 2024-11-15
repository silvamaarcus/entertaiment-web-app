"use client";

import React, { useState } from "react";
import Link from "next/link";

import MovieIcon from "@mui/icons-material/Movie";
import WindowIcon from "@mui/icons-material/Window";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { Avatar } from "@nextui-org/avatar";
import SectionHome from "@/app/(authenticated)/dashboard/[route]/SectionHome";

interface RouteContent {
  [key: string]: JSX.Element;
}

const Sidebar = () => {
  const [activeRoute, setActiveRoute] = useState<string>("home");

  const routeContent: RouteContent = {
    home: (
      <div>
        <SectionHome />
      </div>
    ),
    movies: <div>Explore Movies</div>,
    series: <div>Discover Series</div>,
    bookmark: <div>View Bookmarked Items</div>,
  };

  const handleButtonClick = (route: string) => {
    setActiveRoute(route);
  };

  return (
    <>
      {/* Desktop */}
      <aside className="m-8 hidden h-screen w-24 flex-shrink-0 items-center justify-center rounded-[20px] bg-darkBackground sm:flex">
        <nav className="flex h-full flex-col items-center justify-between py-9">
          <div className="flex flex-col items-center justify-center gap-20">
            <div>
              <Link href="/dashboard/home">
                <MovieIcon
                  htmlColor="var(--primary)"
                  className="h-8 w-8 hover:text-primary"
                />
              </Link>
            </div>
            <ul className="flex flex-col items-center justify-center gap-5">
              <li onClick={() => handleButtonClick("home")}>
                <WindowIcon
                  htmlColor="var(--greyishBlue)"
                  className="transition-all hover:text-primary"
                />
              </li>

              <li onClick={() => handleButtonClick("movies")}>
                <LocalMoviesIcon
                  htmlColor="var(--greyishBlue)"
                  className="transition-all hover:text-primary"
                />
              </li>

              <li onClick={() => handleButtonClick("series")}>
                <LiveTvIcon
                  htmlColor="var(--greyishBlue)"
                  className="transition-all hover:text-primary"
                />
              </li>

              <li onClick={() => handleButtonClick("bookmark")}>
                <BookmarkIcon
                  htmlColor="var(--greyishBlue)"
                  className="transition-all hover:text-primary"
                />
              </li>
            </ul>
          </div>

          <div>
            <Avatar
              isBordered
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              size="sm"
            />
          </div>
        </nav>
      </aside>

      {/* Mobile */}
      <aside className="m-6 flex h-[72px] items-center justify-center rounded-[20px] bg-darkBackground sm:hidden">
        <nav className="flex w-full items-center justify-between px-6">
          <div>
            <Link href="/dashboard/home">
              <MovieIcon
                htmlColor="var(--primary)"
                className="h-8 w-8 hover:text-foreground"
              />
            </Link>
          </div>
          <ul className="flex items-center justify-center gap-5">
            <li onClick={() => handleButtonClick("home")}>
              <WindowIcon
                htmlColor="var(--greyishBlue)"
                className="transition-all hover:text-primary"
              />
            </li>

            <li onClick={() => handleButtonClick("movies")}>
              <LocalMoviesIcon
                htmlColor="var(--greyishBlue)"
                className="transition-all hover:text-primary"
              />
            </li>

            <li onClick={() => handleButtonClick("series")}>
              <LiveTvIcon
                htmlColor="var(--greyishBlue)"
                className="transition-all hover:text-primary"
              />
            </li>

            <li onClick={() => handleButtonClick("bookmark")}>
              <BookmarkIcon
                htmlColor="var(--greyishBlue)"
                className="transition-all hover:text-primary"
              />
            </li>
          </ul>
          <div>
            <Avatar
              isBordered
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              size="sm"
            />
          </div>
        </nav>
      </aside>

      {/* Conteudo dinamico */}
      <main className="flex-1 p-6 overflow-hidden">
        {routeContent[activeRoute]}
      </main>
    </>
  );
};

export default Sidebar;
