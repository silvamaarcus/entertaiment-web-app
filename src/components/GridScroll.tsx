"use client";
import { useEffect, useState } from "react";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import data from "../utils/data.json";

import CardBig from "./CardBig";

const GridScroll = () => {
  const [slidesToShow, setSlidesToShow] = useState<number>(3);

  // Obtendo largura da tela
  const handleWidthDevice = () => {
    const newWidth = window.innerWidth;
    setSlidesToShow(newWidth < 640 ? 2 : 3);
  };

  useEffect(() => {
    // Chama a função uma vez no carregamento inicial
    handleWidthDevice();

    // Adiciona um listener para o evento de redimensionamento
    window.addEventListener("resize", handleWidthDevice);

    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener("resize", handleWidthDevice);
  }, []);

  return (
    <section className="mt-6 px-2 sm:mt-10">
      <Swiper
        slidesPerView={slidesToShow}
        spaceBetween={40}
        freeMode={true}
        modules={[FreeMode]}
        className="h-[140px] w-full cursor-pointer sm:h-[240px]"
      >
        {data.slice(0, 5).map((card, index) => (
          <div key={index}>
            <SwiperSlide className="h-full w-[240px] rounded-lg sm:h-[230px] sm:w-[470px]">
              <CardBig
                alt={card.title}
                src={card.thumbnail.regular.small}
                title={card.title}
                description={{
                  year: card.year,
                  type: card.category,
                  classification: card.rating,
                }}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </section>
  );
};

export default GridScroll;
