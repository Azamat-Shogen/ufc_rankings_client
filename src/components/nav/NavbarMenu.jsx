import React from 'react'
import ufc_logo from '../../images/ufc_logo2.png';
import {
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
} from "reactstrap";



const NavbarMenu = () => {


    return (
        <div>
         <Navbar
             color="dark"
             dark
             expand="md"
         >
             <NavbarBrand className="m-2" href="/">
                 <img src={ufc_logo} style={{height: "40px", width: "70px", margin: "auto"}} alt=""/>
             </NavbarBrand>

             <NavbarText>
               UFC RANKINGS
             </NavbarText>

         </Navbar>
        </div>
    )
}

export default NavbarMenu