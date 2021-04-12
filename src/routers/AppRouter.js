// AppRouter es el fichero main del routing del spa
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// layout components
import NavBar from '../components/ui/NavBar'
const AppRouter = () => {
  return (
    <Router>
      <NavBar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </NavBar>
    </Router>
  );
};

export default AppRouter;
