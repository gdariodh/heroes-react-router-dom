// filters
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";
import HeroeCard from "./HeroeCard";
// components

// template component of heroes like Marvel or DC
const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="card-columns">
      {heroes.map((heroe) => (
        <HeroeCard key={heroe.id} heroe={heroe} />
      ))}
    </div>
  );
};

export default HeroList;
