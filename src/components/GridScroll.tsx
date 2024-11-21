"use client";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import CardBig from "./CardBig";
import { useEffect, useState } from "react";

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
    <>
      <Swiper
        slidesPerView={slidesToShow}
        spaceBetween={40}
        freeMode={true}
        modules={[FreeMode]}
        className="h-[140px] w-full cursor-pointer sm:h-[240px]"
      >
        <SwiperSlide className="h-full w-[240px] rounded-lg sm:h-[230px] sm:w-[470px]">
          <CardBig title="TESTE" src="image.png" alt="teste" />
        </SwiperSlide>
        <SwiperSlide>
          <CardBig title="TESTE" src="image.png" alt="teste" />
        </SwiperSlide>
        <SwiperSlide className="h-[140px] w-[240px] rounded-lg sm:h-[230px] sm:w-[470px]">
          Slide 3
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default GridScroll;
