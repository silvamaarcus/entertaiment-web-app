import CardSmall from "./CardSmall";

import data from "../utils/data.json";

export interface GridTitlesSMProps {
  title: string;
}

const GridTitlesSM = ({ title }: GridTitlesSMProps) => {
  return (
    <section className="mt-6 w-full overflow-hidden px-2 sm:mt-10">
      <h1 className="text-xl font-light sm:text-3xl">{title}</h1>
      <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-10">
        {data.slice(0, 12).map((card, index) => (
          <div key={index}>
            <CardSmall
              alt={card.title}
              src={card.thumbnail.regular.small}
              title={card.title}
              description={{
                year: card.year,
                type: card.category,
                classification: card.rating,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridTitlesSM;

// "use client";

// import { useEffect, useState } from "react";
// import CardSmall from "./CardSmall";
// import { fetchOMDbData, OMDbResponse } from "@/utils/fetchOMDbData";

// export interface GridTitlesSMProps {
//   title: string;
// }

// interface Card {
//   src: string;
//   alt: string;
//   title: string;
//   description: {
//     year: string;
//     type: string;
//     classification: string;
//   };
// }

// const GridTitlesSM = ({ title }: GridTitlesSMProps) => {
//   const [cards, setCards] = useState<Card[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchMoviesAndSeries = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const keywords = [
//           "love",
//           "war",
//           "space",
//           "adventure",
//           "hero",
//           "future",
//         ];
//         const randomKeyword =
//           keywords[Math.floor(Math.random() * keywords.length)];

//         const data: OMDbResponse = await fetchOMDbData(randomKeyword); // Busca na OMDb API

//         if (data.Search) {
//           const formattedCards = data.Search.map((item) => ({
//             src: item.Poster !== "N/A" ? item.Poster : "/placeholder.jpg",
//             alt: item.Title,
//             title: item.Title,
//             description: {
//               year: item.Year,
//               type: item.Type,
//               classification: "N/A",
//             },
//           }));

//           setCards(formattedCards.slice(0, 12)); // Exibir no máximo 12 resultados
//         } else {
//           setError(data.Error || "Nenhum resultado encontrado.");
//         }
//       } catch (err) {
//         setError("Erro ao buscar títulos.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMoviesAndSeries();
//   }, []);

//   return (
//     <section className="mt-6 w-full overflow-hidden px-2 sm:mt-10">
//       <h1 className="text-xl font-light sm:text-3xl">{title}</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-10">
//           {cards.map((card, index) => (
//             <div key={index}>
//               <CardSmall
//                 alt={card.alt}
//                 src={card.src}
//                 title={card.title}
//                 description={card.description}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default GridTitlesSM;
