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
    // <aside className="w-24 rounded-[20px] my-8 ml-8 bg-gray-800 text-white p-4 sm:w-full sm:m-6 ">
    //   <nav>
    //     <ul className="flex flex-col gap-5 sm:flex-row">
    //       <li>
    //         <Link href="/dashboard/home">Home</Link>
    //       </li>
    //       <li>
    //         <Link href="/dashboard/bookmark">Bookmark</Link>
    //       </li>
    //       {/* Outros links se necessário */}
    //     </ul>
    //   </nav>
    // </aside>

    //  Mobile
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
  );
};

export default Sidebar;
