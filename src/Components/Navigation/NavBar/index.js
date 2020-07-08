import React from "react";
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";
import Navbar from "react-bootstrap/Navbar";

function index(props) {
    return (
        <Navbar sticky="top" className={`nav-navbar`}>
            <div className="dropdown">
                <span>
                    <a href="/">Home</a>
                    <div className="dropdown-arrow" />
                </span>
                <div className="dropdown-content">
                    <a href="example.html">E-Edition</a>
                </div>
            </div>
            <span>
                <a href="police-reports">Police Reports</a>
            </span>
            <div className="dropdown">
                <span>
                    <a href="sports">Sports</a>
                    <div className="dropdown-arrow" />
                </span>
                <div className="dropdown-content">
                    <a href="example.html">Label</a>
                    <a href="example.html">Label</a>
                    <a href="example.html">Label</a>
                </div>
            </div>
            <span>
                <a href="obituaries.html">Obituaries</a>
            </span>
            <div className="dropdown">
                <span>
                    <a href="food.html">Food</a>
                    <div className="dropdown-arrow" />
                </span>
                <div className="dropdown-content">
                    <a href="example.html">Food</a>
                    <a href="example.html">Label</a>
                    <a href="example.html">Label</a>
                </div>
            </div>
            <div className="dropdown">
                <span>
                    <a href="entertainment.html">Entertainment</a>
                    <div className="dropdown-arrow" />
                </span>
                <div className="dropdown-content">
                    <a href="example.html">Entertainment</a>
                    <a href="example.html">Label</a>
                    <a href="example.html">Label</a>
                </div>
            </div>
            <span>
                <a href="classifieds.html">Classifieds</a>
            </span>
            <span>
                <a href="subscribe.html">Subscribe</a>
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
