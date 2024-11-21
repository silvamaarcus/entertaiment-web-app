import GridTitlesSM from "@/components/GridTitles";
import InputMaster from "@/components/InputMaster";

const SectionBookmark = () => {
  return (
    <div>
      <InputMaster placeholder="Search for bookmarked shows" />
      <GridTitlesSM title="Bookmarked Movies" />
      <GridTitlesSM title="Bookmarked TV Series" />
    </div>
  );
};

export default SectionBookmark;
