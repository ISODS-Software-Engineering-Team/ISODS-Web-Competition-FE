import React from 'react';
import NavBar from '../Utils/NavBar';
import '../Utils/NavBar.css';
import NavBarData from '../Utils/NavBarData';
import './Competition.css';

const Competition = ({ children }) => {
  return (
    <div>
      <div className="comp-header">
        <NavBar data={NavBarData} />
        <div className="comp-auth-buttons-container">
          <button className="comp-login-button">Sign In</button>
          <button className="comp-signup-button">Register</button>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Competition;
