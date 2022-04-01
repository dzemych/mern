import {createContext} from "react";

const noop = () => {}

export default createContext({
   userId: null,
   token: null,
   isAuth: false,
   login: noop,
   logout: noop
})