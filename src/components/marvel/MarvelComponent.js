import HeroList from "../heroes/HeroList";

const MarvelComponent = () => {
  return (
    <div>
      <h2>Marvel component</h2>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </div>
  );
};

export default MarvelComponent;
