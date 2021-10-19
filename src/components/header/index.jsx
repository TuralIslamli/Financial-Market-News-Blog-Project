import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

const Header = () => {
    return(
        <header className="header">
            <NavLink to='/articles'>SHARETRADE.com</NavLink>
        </header>
    )
}

export default Header;