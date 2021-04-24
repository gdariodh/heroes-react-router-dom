// describen actions de la app y ejecutan un reducer
import { types } from "../types";

// state central app
// export const initialState = {
//     name: "",
//     logged: false
// }

// altera state de la app
const AuthReducer = (state = {}, action) => {
   
   switch (action.type) {
       case types.login:
           return {
               ...action.payload,
               logged: true
           }

        case types.logout:
            return{
                logged: false
            }   
   
       default:
           return state;
   }
}
 
export default AuthReducer;