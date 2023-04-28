import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Utils/NavBar';
import '../Utils/NavBar.css';
import NavBarData from '../Utils/NavBarData';
import './Competition.css';
import { FaSearch } from 'react-icons/fa';
import CompetitionData from './CompetitionData';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <div className="search-icon">
        <FaSearch />
      </div>
    </div>
  );
};

const CompetitionSearch = () => {
  return (
    <div className="competition-search">
      <input type="text" placeholder="Search competition" />
      <div className="search-icon">
        <FaSearch />
      </div>
    </div>
  );
};

const CompetitionCard = ({ competition }) => {
  return (
    <div className="card">
      <img src={competition.imageUrl} alt={competition.name} />
      <h3>{competition.name}</h3>
      <p>{competition.info}</p>
      <Link to={`/competitions/${competition.id}`} className="card-button">
        View Details
      </Link>
    </div>
  );
};

const Competition = ({ children }) => {
    return (
      <div className="comp-container">
        <NavBar data={NavBarData} />
  
        {/* Search bar and authentication buttons */}
        <div className="comp-header">
          <div className="search-bar-container">
            <SearchBar />
          </div>
          <div className="comp-auth-buttons-container">
            <Link to="/signin">
              <button className="comp-login-button">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="comp-signup-button">Register</button>
            </Link>
          </div>
        </div>
  
        {/* Competition Info */}
        <div className="comp-info">
          <h1>Competition</h1>
          <p className="comp-paragraph">
            Grow your data science skills by competing in our exciting
            competitions. Find help in the documentation or learn about
            Community Competitions.
          </p>
        </div>
  
        {/* Competition Search */}
        <CompetitionSearch />
  
        {/* Competition Cards */}
        <div className="card-container">
          {CompetitionData.slice(0, 9).map((competition) => (
            <CompetitionCard key={competition.id} competition={competition} />
          ))}
        </div>
  
        <main className="comp-main">{children}</main>
      </div>
    );
  };
  
  export default Competition;
  
  
  
  