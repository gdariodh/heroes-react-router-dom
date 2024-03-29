import { Link, NavLink, useHistory } from "react-router-dom";
// context
import { useContext } from "react";
import { types } from "../../types";
import AuthContext from "../../auth/authContext";

const Navbar = () => {
  const { dispatch, user } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });

    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          {user.name && (
            <span className="nav-item nav-link text-info">{user.name}</span>
          )}
          <button
            onClick={handleLogout}
            className="nav-item nav-link btn"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
