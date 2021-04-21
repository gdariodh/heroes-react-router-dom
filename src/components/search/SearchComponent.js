import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { heroes } from "../../data/heroes";
import getHeroeById from "../../selectors/getHeroeById";
import HeroeCard from "../heroes/HeroeCard";
// leer queryString de la url
import queryString from "query-string";

const SearchComponent = () => {
  // react router dom
  const history = useHistory();
  const location = useLocation();

  // leer queryString pasado desde el handleSubmit

  // q = '' por default para que no de error si no hay
  const {q = ''} = queryString.parse(location.search);

  const heroesFiltered = heroes;

  // search data input
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data) return alert("add a heroe");

    // agregar queryString con la data ingresada a /search -> /search?q=data
    history.push(`?q=${data}`);

    // pasar varios queryString history.push(`?q=${data}&heroe2=batman&heroe3=robin`)

    // queryString es un parametro que quedaria como "/search?q=3213" por ejemplo.

    setData("");
  };

  return (
    <div>
      <h1>Search Component</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Find your heroe"
              className="form-control"
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <input
              type="submit"
              value="Search..."
              className="btn m-1 btn-block btn-outline-primary"
            />
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((heroe) => (
            <HeroeCard key={heroe.id} heroe={heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
