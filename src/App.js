// routing
import { useReducer } from "react";
import AppRouter from "./routers/AppRouter";
// context
import AuthContext from "./auth/authContext";
import AuthReducer from "./auth/authReducer";

// init en el useReducer se usa para mandar un localStorage
const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const App = () => {
  // conexion context con reducer

  // user = state
  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  return (
    <>
      <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
      </AuthContext.Provider>
    </>
  );
};

export default App;
