import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Utils/NavBar';
import NavBarData from '../Utils/NavBarData';
import { FaSearch } from 'react-icons/fa';
import CompetitionData from './CompetitionData';
import '../Utils/NavBar.css';
import './Competition.css';

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
        <img src={competition.imageUrl} alt={competition.name} style={{ maxWidth: "100%" }} />
        <h3>{competition.name}</h3>
        <p>{competition.info}</p>
        <Link to={`/competitions/${competition.id}`} className="card-button">
          View Details
        </Link>
      </div>
    );
  };
  

const Competition = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
        <div className="comp-container">
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} data={NavBarData} />

            <div className="comp-header" style={{paddingLeft: isOpen ? "200px" : "70px"}}>
                {/* Search bar */}
                <div className="search-bar-container">
                    <SearchBar />
                </div>
                {/* SignIn and Register buttons */}
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
            <div className="comp-info" style={{paddingLeft: isOpen ? "200px" : "70px"}}>
                <div className="comp-info-buttons">
                    <h1>Competitions</h1>
                </div>
                <p className="comp-paragraph">
                    Grow your data science skills by competing in our exciting competitions.
                    Find help in the documentation or learn about Community Competitions.
                </p>
            </div>

            {/* Competition search bar */}
            <CompetitionSearch />

            {/* Competition Cards */}
            <div className="card-container" style={{paddingLeft: isOpen ? "200px" : "70px"}}>
                {CompetitionData.slice(0, 9).map((competition) => (
                    <CompetitionCard key={competition.id} competition={competition} />
                ))}
            </div>

            <main className="comp-main" style={{paddingLeft: isOpen ? "200px" : "70px"}}>{children}</main>
        </div>
    );
};

export default Competition;
