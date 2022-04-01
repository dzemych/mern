import React from 'react'
import 'materialize-css/sass/materialize.scss'
import AuthContext from "./context/authContext";
import getRoutes from "./routes";
import {BrowserRouter as Router} from "react-router-dom";
import classes from './App.module.sass'
import useAuth from "./hooks/useAuth.hook";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";


function App() {
  const {login, logout, userId, isAuth, token, ready} = useAuth()
  const routes = getRoutes(isAuth)

  const routerComp = () => (
     <Router>
        {isAuth && <Navbar/>}
        <div className="container">
           {routes}
        </div>
     </Router>
  )

  return (
     <div className={classes.App}>
        <AuthContext.Provider value={{
           login, logout, userId, isAuth, token
        }}>
           {!ready ? <Loader/> : routerComp()}
        </AuthContext.Provider>
     </div>
  );
}

export default App;
