import React from "react";
import SectionHome from "./pages/SectionHome";
import { GetStaticPropsContext } from "next";

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

// Função para gerar `params` de forma estática
export async function getStaticPaths() {
  return {
    paths: [{ params: { section: "home" } }, { params: { section: "bookmark" } }],
    fallback: "blocking",
  };
}

// Função para passar `params` como props
export async function getStaticProps(context: GetStaticPropsContext) {
  const { section } = context.params || {};
  return {
    props: {
      params: { section },
    },
    notFound: !section,
  };
}

export default SectionPage;
