import React from 'react';
import NavBar from '../Utils/NavBar';
import '../Utils/NavBar.css';
import NavBarData from '../Utils/NavBarData';
import './Competition.css';

const Competition = ({ children }) => {
  return (
    <div>
      <NavBar data={NavBarData} />
      <main>{children}</main>
    </div>
  );
};

export default Competition;
