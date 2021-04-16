// AppRouter es el fichero main del routing del spa - este es que se manda al App.js
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginComponent from "../components/login/LoginComponent";
import DashboardRoutes from "./DashboardRoutes";

// routing main
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginComponent} />
        {/* routing children */}
        <Route path="/" component={DashboardRoutes} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
