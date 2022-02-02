import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo/logo.png';
import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            <nav className ="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"#393E46", color:"#EEEEEE"}}>
                <div className ="container-fluid">
                    <img className='logo m-2 ps-4' src={logo} alt="" />
                   <button className ="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"   aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                  </button>
               <div className ="collapse navbar-collapse" id="navbarNavDropdown">
                   <ul className ="navbar-nav ms-auto pe-4">
                      <li className ="nav-item me-5">
                          <NavLink to="/">Home</NavLink>
                     </li>
                     <li className ="nav-item me-5">
                         <NavLink to='/pricing'>Pricing</NavLink>
                     </li>
                     <li className ="nav-item me-5">
                         <NavLink to= '/about'>About</NavLink>
                     </li>
                     <li className ="nav-item me-5">
                         <NavLink to='/login'>Login</NavLink>
                     </li>
            </ul>
       </div>
    </div>
  </nav>
        </div>
    );
};

export default Navbar;