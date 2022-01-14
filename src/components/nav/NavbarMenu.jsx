import React from 'react'
import ufc_logo from '../../images/ufc_logo2.png';
import { NavLink } from 'react-router-dom'


const NavbarMenu = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark p-3">
            <div className="col-lg-4">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav container justify-content-around">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rankings">Rankings</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/athletes">Athletes</NavLink>
                    </li>
                </ul>

            </div>
            </div>

            <div className="col-lg-4">

                <img src={ufc_logo} style={{height: "40px", width: "70px", margin: "auto"}} alt=""/>

            </div>
            <div className="col-lg-4"><NavLink className="nav-link" style={{float: "right"}} to="#">AZ</NavLink></div>

        </nav>
    )
}

export default NavbarMenu

