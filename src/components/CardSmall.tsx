import React, { useState } from "react";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";

export interface Description {
  year: number | string;
  type: React.ReactNode;
  classification: string;
}

export interface CardSmallProps {
  src: string;
  alt: string;
  title: string;
  description?: Description;
}

const CardSmall = ({ src, alt, title, description }: CardSmallProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <Image className="h-auto w-full" alt={alt} src={src} />

        {/* Bookmark Button */}
        {isHovered && (
          <div className="absolute top-2 right-2 z-30">
            <button
              onClick={() => console.log("Bookmark")}
              className="flex items-center justify-center rounded-full bg-neutral-800/50 p-2"
            >
              <BookmarkBorderIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        )}

        {/* Play Button */}
        {isHovered && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50">
            <Button
              className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white"
              onClick={() => console.log("Rodando...")}
            >
              <PlayCircleFilledOutlinedIcon className="h-6 w-6" />
              Play
            </Button>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mt-2 space-y-3">
        <div className="flex items-center gap-2 text-xs text-white/80 sm:text-sm">
          <span>{description?.year ?? "N/A"}</span>
          <span>°</span>
          <span>{description?.type ?? "N/A"}</span>
          <span>°</span>
          <span>{description?.classification ?? "N/A"}</span>
        </div>
        <span className="text-base font-normal text-white sm:text-2xl">
          {title}
        </span>
      </div>
    </div>
  );
};

export default CardSmall;
