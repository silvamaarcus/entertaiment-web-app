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

export interface CardBigProps {
  src: string;
  alt: string;
  title: string;
  description?: Description;
}

const CardSmall = ({ src, alt, title, description }: CardBigProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Card
      className="group relative h-[110px] w-[164px] cursor-pointer overflow-hidden rounded-lg shadow-lg sm:h-[174px] sm:w-[280px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem para desktop */}
      <Image
        src={src}
        alt={alt}
        className="absolute inset-0 z-0 hidden rounded-lg object-cover sm:block"
        width={280}
        height={174}
      />
      {/* Imagem para mobile */}
      <Image
        src={src}
        alt={alt}
        className="absolute inset-0 z-0 rounded-lg object-cover sm:hidden"
        width={164}
        height={110}
      />
      <CardHeader className="relative z-10 flex items-center justify-end sm:p-6">
        <BookmarkBorderIcon className="h-8 w-8 rounded-full bg-neutral-800/50 p-1" />
      </CardHeader>
      <CardBody className="relative z-10 flex items-center justify-center p-0">
        {isHovered && (
          <Button className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white/80">
            <PlayCircleFilledOutlinedIcon className="h-6 w-6" />
            Play
          </Button>
        )}
      </CardBody>
      <CardFooter className="relative z-10 flex flex-col items-start justify-center bg-gradient-to-t from-black/80 to-transparent p-6">
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
      </CardFooter>

      {/* Máscara no hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Card>
  );
};

export default CardSmall;
