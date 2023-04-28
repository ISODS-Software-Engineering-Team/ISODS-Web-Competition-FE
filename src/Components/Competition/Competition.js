import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Utils/NavBar';
import '../Utils/NavBar.css';
import NavBarData from '../Utils/NavBarData';
import './Competition.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
  );
};

const Competition = ({ children }) => {
    return (
      <div>
        <NavBar data={NavBarData} />
        <div className="search-bar-container">
          <SearchBar />
        </div>
        <div className="comp-info">
          <h1>Competition</h1>
        </div>
        <div className="comp-auth-buttons-container">
          <Link to="/signin">
            <button className="comp-login-button">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="comp-signup-button">Register</button>
          </Link>
        </div>
        <main>{children}</main>
      </div>
    );
  };
  

export default Competition;
