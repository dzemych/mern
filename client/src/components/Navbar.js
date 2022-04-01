import React, {useContext} from 'react'
import {NavLink, useNavigate} from "react-router-dom";
import authContext from "../context/authContext";


const Navbar = (props) => {

   const navigate = useNavigate()
   const {logout} = useContext(authContext)

   const logoutHandler = e => {
      e.preventDefault()
      logout()
      navigate('/')
   }

    return(
       <nav>
          <div className="nav-wrapper blue darken-1" style={{
             padding: '0 20px'
          }}>
             <span className="brand-logo">Short your links</span>
             <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to={'/create'} href="sass.html">Create</NavLink></li>
                <li><NavLink to={'/links'} href="badges.html">Links</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Logout</a></li>
             </ul>
          </div>
       </nav>
    )
}

export default Navbar