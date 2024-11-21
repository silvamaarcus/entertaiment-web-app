"use client";

import React from "react";

import SearchIcon from "@mui/icons-material/Search";

import CardBig from "@/components/CardBig";
import CardSmall from "@/components/CardSmall";
import InputMaster from "@/components/InputMaster";
import GridTitlesSM from "@/components/GridTitles";
import GridScroll from "@/components/GridScroll";

const SectionHome = () => {
  return (
    <>
      <section>
        <InputMaster placeholder="Search for movies or TV series" />

        <GridScroll />
      </section>

      <GridTitlesSM title="Recommended for you" />
    </>
  );
};

export default SectionHome;
