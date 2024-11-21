import GridTitlesSM from "@/components/GridTitles";
import InputMaster from "@/components/InputMaster";

const SectionMovies = () => {
  return (
    <div>
      <InputMaster placeholder="Search for movies" />
      <GridTitlesSM title="Movies" />
    </div>
  );
};

export default SectionMovies;
