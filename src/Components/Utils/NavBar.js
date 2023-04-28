import React, { useState } from 'react';
import {
    FaBars,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import NavBarData from "./NavBarData";

const NavBar = ({ children }) => {
    const [isOpen ,setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    return (
        <div className="navbar-container">
            <div style={{width: isOpen ? "200px" : "70px"}} className="sidebar">
                <div className="top_section">
                    <div style={{marginLeft: isOpen ? "8px" : "8px"}} className="bars">
                        <div className="bars-bg" />
                        <FaBars onClick={() => setIsOpen(!isOpen)} />
                    </div>
                    <h1 style={{display: isOpen ? "block" : "none", "color" : "orange", "padding-left": "20px"}} className="logo">ISODS</h1>

                </div>
                {NavBarData.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="link"
                        activeClassName="active"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default NavBar;
