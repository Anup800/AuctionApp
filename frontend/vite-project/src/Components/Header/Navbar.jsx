import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
  const role =   localStorage.getItem("role");
  const dashboard = role==="admin" ? "/admin": "/bidder";
  const name = localStorage.getItem("name");
  return (
    <nav>
   <h3>Auction</h3>
    
    <ul>
        
        <li><Link to="/">Home</Link></li>
         <li><Link to={dashboard}>DashBoard</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li> Hello   {name}</li>
        
    </ul>
 
     </nav>
  )
}

export default Navbar