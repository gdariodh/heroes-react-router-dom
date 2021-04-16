// filters 
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";

// template component of heroes like Marvel or DC
const HeroList = ({publisher}) => {

   const heroes = getHeroesByPublisher(publisher)

    return ( 
       <ul>
            {
                heroes.map(heroe => (
                    <li key={heroe.id}>
                        {heroe.superhero}
                    </li>
                ))
            }
       </ul>
     );
}
 
export default HeroList;