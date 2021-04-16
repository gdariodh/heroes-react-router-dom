import { heroes } from "../data/heroes";

const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  // si no lo encuentra
  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no es correcto`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};

export default getHeroesByPublisher;
