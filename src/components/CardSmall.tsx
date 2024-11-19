import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

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
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <Image className="h-auto w-full" alt={alt} src={src} />

        {/* Mask */}
        {isHovered && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
            <Button className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white">
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
