// acceder al parametro id que se envio desde HeroeCard
// // option1: const HeroesComponent = ({match:{params}}) => {
//     const heroeId = params.heroeId;
// }

// option2
import { useMemo } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import getHeroeById from "../../selectors/getHeroeById";
// filters

const HeroesComponent = () => {
  const history = useHistory();

  // acceder al parametro id que se envio desde HeroeCard
  const { heroeId } = useParams();

  // useMemo evita que se ejecute getHeroeById cada vez q se renderiza el component,
  // asi solamente se ejecuta getHeroeById si heroeId es diferente al que estaba antes,
  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);

  // option 1: const heroe = getHeroeById(heroeId); - sin useMemo

  // devuelve al home, <Redirect/> pq se tiene que devolver un component para renderizar en react
  if (!heroe) return <Redirect to="/" />;

  const handleReturn = () => {
    // evita que si se abre desde otra ventana y no tiene una url anterior como /marvel o /dc
    // regrese al home, y no al buscador google

    // si el historial es <=2 es pq no tiene url anterior
    if (history.length <= 2) {
      history.push("/");
    } else {
      // ir a la url anterior, que es /marvel o /dc
      history.goBack();
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail"
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={heroe.superhero}
        />
      </div>
      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {heroe.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {heroe.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b> {heroe.first_appearance}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{heroe.characters}</p>

        <button onClick={handleReturn} className="btn btn-outline-info">
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroesComponent;
