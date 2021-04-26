import { useContext } from "react";
import AuthContext from "../../auth/authContext";
import { types } from "../../types";

const LoginComponent = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleClick = () => {
    // comprobar si hay un lastPath antes del Logout
    const lastPath = localStorage.getItem("lastPath") || "/";
    // si no hay, que asigne "/" q es el home de la app

    dispatch({
      type: types.login,
      payload: {
        name: "Gabi",
      },
    });

    // push & replace -> redirects spa
    // history.push('/') -> no borra el historial
    history.replace(lastPath); // borra el historial, si le dan back a la url anterior no podran acceder
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button onClick={handleClick} className="btn btn-primary">
        login
      </button>
    </div>
  );
};

export default LoginComponent;
