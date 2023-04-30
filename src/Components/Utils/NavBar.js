import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import NavBarData from "./NavBarData";

const NavBar = ({ isOpen, setIsOpen, children }) => {
  const sidebarRef = useRef(null);
  // const [sidebarWidth, setWidth] = useState("70px");
  const [openFromHover, setOpenFromHover] = useState(false);
  const isWidenSidebar = useRef(false);

  const handleMouseEnter = () => {
    setOpenFromHover(true);
  };

  const handleMouseLeave = () => {
    setOpenFromHover(false);
  };

  const getSideBarWidth = () => {
    if(isOpen) {
      return 200;
    } 
    return openFromHover ? 200 : 70;
  }

  useEffect(() => {
    const onWindowResize = (event) => {
      console.log(event.target.innerHeight);
      if(sidebarRef.current) {
        let sidebarWidth = sidebarRef.current.getBoundingClientRect().width;
        // when the height of sizebar is smaller than 624, 
        if(event.target.innerHeight <= 624 && !isWidenSidebar.current) {
          sidebarRef.current.style.width = (17 + sidebarWidth) + 'px';
          isWidenSidebar.current = true;
        } else if (isWidenSidebar.current && event.target.innerHeight >= 624) {
          sidebarRef.current.style.width = (sidebarWidth - 17) + 'px';
          isWidenSidebar.current = false;
        }
      }
    }

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    }
  }, []);

  return (
    <div className="navbar-container">
      <div ref={sidebarRef} style={{ width: getSideBarWidth() }} className="sidebar">
        <div className="logo">
          <img src="https://www.isods.org//images/isods_small_logo.png" className="logo" alt="Profile Picture" />
        </div>
        <div className="top_section">
          <div style={{ marginLeft: "22px" }} className="bars">
            {/* <div className="bars-bg" /> */}
            <FaBars onClick={() => {
              setIsOpen(!isOpen)
            }}/>
          </div>
          {/* <h1
            style={{
              display: isOpen ? "block" : "none",
              color: "orange",
              paddingLeft: "20px",
            }}
            className="logo"
          >
            ISODS
          </h1> */}
        </div>
        {NavBarData.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
            onMouseEnter={!isOpen ? handleMouseEnter : null}
            onMouseLeave={!isOpen ? handleMouseLeave : null}
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen || openFromHover ? "block" : "none" }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main style={{ width: `calc(100% - ${getSideBarWidth() + 'px'})` }}>{children}</main>
    </div>
  );
};

export default NavBar;
