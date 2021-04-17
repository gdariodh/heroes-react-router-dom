import { Link } from "react-router-dom";

const HeroeCard = ({ heroe }) => {
  const {
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
  } = heroe;
  return (
    <div className="card ms-3" style={{ maxWidth: 350 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          {/* . -> public/ */}
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="card-img"
            alt={superhero}
          />
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {
                characters !== alter_ego && (<p className="card-text">{characters}</p>)
            }
            <p className='card-text'>
                <small className='text-muted'>
                    {first_appearance}
                </small>
            </p>

            {/* ruta personalizada de heroe por id */}
            <Link to={`/heroe/${id}`} className='btn btn-primary'>
               Mas...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroeCard;
