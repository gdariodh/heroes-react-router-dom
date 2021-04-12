// AppRouter es el fichero main del routing del spa - este es que se manda al App.js
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginComponent from "../components/login/LoginComponent";
// layout components
import NavBar from "../components/ui/NavBar";
// children components
import MarvelComponent from "../components/marvel/MarvelComponent";

const AppRouter = () => {
  return (
    <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={MarvelComponent} />
          <Route exact path="/login" component={LoginComponent} />
        </Switch>
    </Router>
  );
};

export default AppRouter;
