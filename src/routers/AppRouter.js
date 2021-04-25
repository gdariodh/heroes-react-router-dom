// AppRouter es el fichero main del routing del spa - este es que se manda al App.js
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginComponent from "../components/login/LoginComponent";
import DashboardRoutes from "./DashboardRoutes";
// retorna rutas privadas si esta auth
import PrivateRoute from "./PrivateRoute";
import AuthContext from "../auth/authContext";

// routing main
const AppRouter = () => {
  // acceder al state de user
  const { user } = useContext(AuthContext);
  const isAuth = user.logged;

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginComponent} />
        {/* routing children */}
        <PrivateRoute path="/" isAuth={isAuth} component={DashboardRoutes} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
