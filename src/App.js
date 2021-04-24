// routing
import { useReducer, useEffect } from "react";
import AppRouter from "./routers/AppRouter";
// context
import AuthContext from "./auth/authContext";
import AuthReducer from "./auth/authReducer";

// init en el useReducer se usa para mandar un localStorage
const init = () => {
  // como el object user en el localStorage es un string ahora
  // hay volver a pasear pero ahora a un object -> JSON
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const App = () => {
  // conexion context con reducer

  // user = state
  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  // si el usuario cambia add al localStorage
  useEffect(() => {
    // como user es object, hay q pasear a string
    if(user){
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  return (
    <>
      <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
      </AuthContext.Provider>
    </>
  );
};

export default App;
