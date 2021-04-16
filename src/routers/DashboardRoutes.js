// routing children
import { Redirect, Route, Switch } from "react-router";
import DcComponent from "../components/dc/DcComponent";
import HeroesComponent from "../components/heroes/HeroesComponent";
import MarvelComponent from "../components/marvel/MarvelComponent";
import Navbar from "../components/ui/NavBar";

const DashboardRoutes = () => {
  return (
    <>
      {/* layout */}
      <Navbar />
      {/* routing */}
      <Switch>
        <Route exact path="/marvel" component={MarvelComponent} />
        <Route exact path="/marvel:heroeId" component={HeroesComponent} />
        <Route exact path="/dc" component={DcComponent} />
        {/* Si no es ninguna de la anteriores rutas, redirect a marvel por defecto  */}
        <Redirect to="/marvel" />
      </Switch>
    </>
  );
};

export default DashboardRoutes;
