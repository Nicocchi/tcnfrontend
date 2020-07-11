import React from "react";
import "./Footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <div>
                © COPYRIGHT 2020, ALL RIGHTS RESERVED
            </div>
            <div className="footer-center">
                <span><a href="index.html">PRIVACY POLICY</a>
                <a href="index.html">TERMS AND CONDITIONS</a></span>
            </div>
            <div>
                <a href="index.html">FACEBOOK</a>
            </div>
        </div>
    );
}
