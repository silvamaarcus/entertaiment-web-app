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

const CardBig = ({ src, alt, title, description }: CardBigProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Card
      className="relative w-[240px] h-[140px] sm:w-[470px] sm:h-[300px] rounded-lg overflow-hidden shadow-lg group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem para desktop */}
      <Image
        src={src}
        alt={alt}
        className="absolute inset-0 object-cover z-0 hidden rounded-lg sm:block"
        width={470}
        height={300}
      />
      {/* Imagem para mobile */}
      <Image
        src={src}
        alt={alt}
        className="absolute inset-0 object-cover z-0 rounded-lg sm:hidden"
        width={240}
        height={140}
      />
      <CardHeader className="relative z-10 flex items-center justify-end sm:p-6">
        <BookmarkBorderIcon className="w-8 h-8 p-1 rounded-full bg-neutral-800/50" />
      </CardHeader>
      <CardBody className="relative z-10 flex items-center justify-center p-0">
        {isHovered && (
          <Button className="flex items-center gap-2 text-white/80 bg-white/10 rounded-full px-4 py-2">
            <PlayCircleFilledOutlinedIcon className="w-6 h-6" />
            Play
          </Button>
        )}
      </CardBody>
      <CardFooter className="relative z-10 flex flex-col items-start justify-center p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
          <span>{description?.year ?? "N/A"}</span>
          <span>°</span>
          <span>{description?.type ?? "N/A"}</span>
          <span>°</span>
          <span>{description?.classification ?? "N/A"}</span>
        </div>
        <span className="text-base sm:text-2xl text-white font-normal">
          {title}
        </span>
      </CardFooter>

      {/* Máscara no hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
};

export default CardBig;
