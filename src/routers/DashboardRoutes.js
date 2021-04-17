// routing children
import { Redirect, Route, Switch } from "react-router";
import DcComponent from "../components/dc/DcComponent";
import HeroesComponent from "../components/heroes/HeroeComponent";
import MarvelComponent from "../components/marvel/MarvelComponent";
import SearchComponent from "../components/search/SearchComponent";
import Navbar from "../components/ui/NavBar";

const DashboardRoutes = () => {
  return (
    <>
      {/* layout */}
      <Navbar />
      {/* routing */}
      <div className="container mt-2">
      <Switch>
        <Route exact path="/marvel" component={MarvelComponent} />
        <Route exact path="/heroe/:heroeId" component={HeroesComponent} />
        <Route exact path="/dc" component={DcComponent} />
        <Route exact path="/search" component={SearchComponent} />
        {/* Si no es ninguna de la anteriores rutas, redirect a marvel por defecto  */}
        <Redirect to="/marvel" />
      </Switch>
      </div>
     
    </>
  );
};

export default DashboardRoutes;
