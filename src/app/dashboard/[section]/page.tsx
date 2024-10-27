import React from "react";
import SectionHome from "./pages/SectionHome";

type SectionPageProps = {
  params: { section: string };
};

function HomeContent() {
  return <SectionHome />;
}

function BookmarkContent() {
  return <div>Conteúdo do Bookmark</div>;
}

const SectionPage = ({ params }: SectionPageProps) => {
  switch (params.section) {
    case "home":
      return <HomeContent />;
    case "bookmark":
      return <BookmarkContent />;
    default:
      return <div>Seção não encontrada</div>;
  }
};
export default SectionPage;
