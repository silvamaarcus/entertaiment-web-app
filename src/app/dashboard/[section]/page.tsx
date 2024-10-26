import React from "react";

type SectionPageProps = {
  params: { section: string };
};

function HomeContent() {
  return <div>Conteúdo da Home</div>;
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
