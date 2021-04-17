const HeroeCard = ({ heroe }) => {
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = heroe;
  return (
      <div className='card ms-3' style={{maxWidth:540}}>
        <div className="row no-gutters">
            <div className="col-md-4">
            {/* . -> public/ */}
                <img src={`./assets/heroes/${id}.jpg`} className='card-img' alt={superhero}/>
            </div>
        </div>
      </div>
  );
};

export default HeroeCard;
