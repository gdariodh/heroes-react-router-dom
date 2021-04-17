import { useState } from "react";
import { heroes } from "../../data/heroes";
import getHeroeById from "../../selectors/getHeroeById";
import HeroeCard from "../heroes/HeroeCard";

const SearchComponent = () => {
  const heroesFiltered = heroes;
  
  const [data, setData] = useState("")
  const [heroe, setHeroe] = useState({})
  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!data) return alert("add a heroe")

    alert(data)
    setData("")
  }

  return (
    <div>
      <h1>Search Component</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form
          onSubmit={handleSubmit}
          >
            <input
              placeholder="Find your heroe"
              className="form-control"
              type="text"
              value={data}
              onChange={e => setData(e.target.value)}
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
