// filters
import { useMemo } from "react";
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";
import HeroeCard from "./HeroeCard";
// components

// template component of heroes like Marvel or DC
const HeroList = ({ publisher }) => {

  // useMemo se usa para optimizar perfomance, lo que hace es que si no cambia el publisher
  // no vuelve a disparar el filter getHeroesByPublisher, y solamente tiene que renderizar la info
  // que ya tiene, la cual esta memorizada ya que no ha cambiado. 
  // Pero si cambia publisher lanza la el filter

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  // option comun, sin useMemo -> const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroes.map((heroe) => (
        <HeroeCard key={heroe.id} heroe={heroe} />
      ))}
    </div>
  );
};

export default HeroList;
