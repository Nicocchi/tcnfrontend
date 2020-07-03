import React from 'react';
import PropTypes from 'prop-types';
import "./NavBar.scss";

function NavBar(props) {
    return (
        <>
        <nav className="nav-navbar">
            <span><a href="#">Home</a></span>
            <span><a href="#">Police Reports</a></span>
            <div className="dropdown">
                <span><a href="#">Sports</a><div className="dropdown-arrow" /></span>
                <div className="dropdown-content">
                    <a href="#">Label</a>
                    <a href="#">Label</a>
                    <a href="#">Label</a>
                </div>
            </div>
            <span><a href="#">Obituaries</a></span>
            <div className="dropdown">
                <span><a href="#">Food</a><div className="dropdown-arrow" /></span>
                <div className="dropdown-content">
                    <a href="#">Food</a>
                    <a href="#">Label</a>
                    <a href="#">Label</a>
                </div>
            </div>
            <div className="dropdown">
                <span><a href="#">Entertainment</a><div className="dropdown-arrow" /></span>
                <div className="dropdown-content">
                    <a href="#">Entertainment</a>
                    <a href="#">Label</a>
                    <a href="#">Label</a>
                </div>
            </div>
            <span><a href="#">Classifieds</a></span>
            <span><a href="#">Subscribe</a></span>
            <span><a href="#">Search</a></span>
        </nav>
        
        </>
    )
}

NavBar.propTypes = {

}

export default NavBar


