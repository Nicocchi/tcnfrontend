import React from 'react';
// import PropTypes from 'prop-types';
import "./TopBar.scss";

function TopBar(props) {

    const today = new Date();
    const dd = today.getDate();
    const mm = today.toLocaleString('default', { month: 'long' });
    const yyyy = today.getFullYear();
    return (
        <nav className="nav-topbar">
            <div className="nav-topbar-center">
                <div className="nav-topbar-left">
                    <p>{mm} {dd}, {yyyy}</p>
                </div>
                <div className="nav-topbar-right">
                <div className="nav-topbar-button"><a href="login.html">Login</a></div>
                <div className="nav-topbar-button"><a href="site-map.html">Site Map</a></div>
                <div className="nav-topbar-button"><a href="contact.html">Contact</a></div>
                </div>
            </div>
        </nav>
    )
}

// TopBar.propTypes = {

// }

export default TopBar


