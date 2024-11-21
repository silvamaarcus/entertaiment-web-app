import CardSmall from "./CardSmall";

export interface GridTitlesSMProps {
  title: string;
}

const cards = [
  {
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    alt: "image 1",
    title: "Title 1",
    description: {
      year: 2023,
      type: "Movie",
      classification: "PG",
    },
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    alt: "image 2",
    title: "Title 2",
    description: {
      year: 2023,
      type: "Movie",
      classification: "PG",
    },
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    alt: "image 3",
    title: "Title 3",
    description: {
      year: 2023,
      type: "Movie",
      classification: "PG",
    },
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    alt: "image 4",
    title: "Title 4",
    description: {
      year: 2023,
      type: "Movie",
      classification: "PG",
    },
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    alt: "image 5",
    title: "Title 5",
    description: {
      year: 2023,
      type: "Movie",
      classification: "PG",
    },
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    alt: "image 6",
    title: "Title 6",
    description: {
      year: 2023,
      type: "Movie",
      classification: "PG",
    },
  },
];

const GridTitlesSM = ({ title }: GridTitlesSMProps) => {
  return (
    <section className="mt-6 w-full overflow-hidden px-2 sm:mt-10">
      <h1 className="text-xl font-light sm:text-3xl">{title}</h1>
      <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-10">
        {cards.slice(0, 12).map((card, index) => (
          <div key={index}>
            <CardSmall
              alt={card.alt}
              src={card.src}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridTitlesSM;
