import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";



const NavbarMenu = () => {


    return (
        <div>
         <Navbar
             color="dark"
             dark
             expand="md"
         >
             <NavbarBrand href="/">
                 UFC RANKINGS
             </NavbarBrand>

         </Navbar>
        </div>
    )
}

export default NavbarMenu