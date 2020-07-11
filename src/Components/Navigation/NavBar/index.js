import React from "react";
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function index(props) {
    return (
        <Navbar sticky="top" className={`nav-navbar`}>
            <div className="dropdown">
                <span>
                    <NavLink to="/">Home</NavLink>
                    <div className="dropdown-arrow" />
                </span>
                <div className="dropdown-content">
                    <NavLink to="/eedition">E-Edition</NavLink>
                </div>
            </div>
            <span>
                <NavLink to="/police-reports">Police Reports</NavLink>
                {/* <a href="police-reports">Police Reports</a> */}
            </span>
            <div className="dropdown">
                <span>
                    <NavLink to="/sports-articles">Sports Articles</NavLink>
                    {/* <a href="sports-articles">Sports</a> */}
                    <div className="dropdown-arrow" />
                </span>
                <div className="dropdown-content">
                    <NavLink to="/sports/scoreboard">Scoreboard</NavLink>
                </div>
            </div>
            <span>
                <NavLink to="/obituaries">Obituaries</NavLink>
            </span>
            <div className="dropdown">
                <span>
                    <NavLink to="/food">Food</NavLink>
                    <div className="dropdown-arrow" />
                </span>
                <div className="dropdown-content">
                    <NavLink to="/food/restaurant-inspections">Restaurant Inspections</NavLink>
                    <NavLink to="/food/from-our-table-to-yours">From Our Table to Yours</NavLink>
                </div>
            </div>
            <div className="dropdown">
                <span>
                    <NavLink to="/entertainment">Entertainment</NavLink>
                    <div className="dropdown-arrow" />
                </span>
                <div className="dropdown-content">
                    <NavLink to="/entertainment/callaway-beacon">Callaway Beacon</NavLink>
                    <NavLink to="/entertainment/community-calendar">Community Calendar</NavLink>
                    <NavLink to="/entertainment/church-calendar">Church Calendar</NavLink>
                    <NavLink to="/entertainment/tv-listings">TV Listings</NavLink>
                </div>
            </div>
            <span>
                <NavLink to="/classifieds">Classifieds</NavLink>
            </span>
            <span>
                <NavLink to="/advertise">Advertise</NavLink>
            </span>
            <span>
                <NavLink to="/subscribe">Subscribe</NavLink>
            </span>
            <span>
                <a href="search.html">
                    <FontAwesomeIcon icon={faSearch} color="#FFF" />
                </a>
            </span>
        </Navbar>
    );
}

index.propTypes = {};

export default index;
