import { heroes } from "../data/heroes";

const getHeroesByName = (name = "") => {
  if (name === "") {
    return [];
  }

  name = name.toLowerCase();
  // includes para revisar si hay heroes con ese nombre o una letra en comun como "a"
  return heroes.filter((heroe) => heroe.superhero.toLowerCase().includes(name));
};

export default getHeroesByName;
