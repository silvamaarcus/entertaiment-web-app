import React from "react";
import Link from "next/link";

import MovieIcon from "@mui/icons-material/Movie";
import WindowIcon from "@mui/icons-material/Window";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { Avatar } from "@nextui-org/avatar";

const Sidebar = () => {
  return (
    <>
      {/* Desktop */}
      <aside className="w-24 rounded-[20px] m-8 bg-background items-center justify-center hidden sm:flex h-screen flex-shrink-0">
        <nav className="flex flex-col items-center justify-between h-full py-9">
          <div className="flex flex-col items-center justify-center gap-20">
            <div>
              <Link href="/dashboard/home">
                <MovieIcon
                  htmlColor="var(--primary)"
                  className="w-8 h-8 hover:text-primary"
                />
              </Link>
            </div>
            <ul className="flex flex-col items-center justify-center gap-5">
              <li>
                <Link href="/dashboard/home">
                  <WindowIcon
                    htmlColor="var(--greyishBlue)"
                    className="hover:text-primary transition-all"
                  />
                </Link>
              </li>
              <li>
                <Link href="/dashboard/movies">
                  <LocalMoviesIcon
                    htmlColor="var(--greyishBlue)"
                    className="hover:text-primary transition-all"
                  />
                </Link>
              </li>
              <li>
                <Link href="/dashboard/series">
                  <LiveTvIcon
                    htmlColor="var(--greyishBlue)"
                    className="hover:text-primary transition-all"
                  />
                </Link>
              </li>
              <li>
                <Link href="/dashboard/bookmark">
                  <BookmarkIcon
                    htmlColor="var(--greyishBlue)"
                    className="hover:text-primary transition-all"
                  />
                </Link>
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
      <aside className="h-[72px] rounded-[20px] m-6 bg-background flex items-center justify-center sm:hidden">
        <nav className="flex items-center justify-between w-full px-6">
          <div>
            <Link href="/dashboard/home">
              <MovieIcon
                htmlColor="var(--primary)"
                className="w-8 h-8 hover:text-foreground"
              />
            </Link>
          </div>
          <ul className="flex items-center justify-center gap-5">
            <li>
              <Link href="/dashboard/home">
                <WindowIcon
                  htmlColor="var(--greyishBlue)"
                  className="hover:text-foreground transition-all"
                />
              </Link>
            </li>
            <li>
              <Link href="/dashboard/movies">
                <LocalMoviesIcon
                  htmlColor="var(--greyishBlue)"
                  className="hover:text-foreground transition-all"
                />
              </Link>
            </li>
            <li>
              <Link href="/dashboard/series">
                <LiveTvIcon
                  htmlColor="var(--greyishBlue)"
                  className="hover:text-foreground transition-all"
                />
              </Link>
            </li>
            <li>
              <Link href="/dashboard/bookmark">
                <BookmarkIcon
                  htmlColor="var(--greyishBlue)"
                  className="hover:text-foreground transition-all"
                />
              </Link>
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
    </>
  );
};

export default Sidebar;
