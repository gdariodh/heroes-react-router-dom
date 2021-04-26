// acceso sola para usuarios authed
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

// ...rest para que escuche por las demas props, aparte de las definidas
const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
 
  // en rest estan todas las propiedades de historial de react router dom

  // recordar ultima ruta antes del logout
  const lastPath = rest.location.pathname;

  // add lastPath al localStorage para ser extraido en LoginComponent
  // para usarlo como redirect
  localStorage.setItem("lastPath", lastPath);

  return (
    <>
      {/* ...rest para props como exact for example */}
      <Route
        {...rest}
        component={(props) =>
          isAuth ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
      {/* 
      si se cumple (isAuth -> true), retorna el componente protegido pasado por props
     */}
    </>
  );
};

// PropTypes -> best practice, para que marque error si falta un prop por pasar
PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  // como es functional component, PropTypes is func
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
