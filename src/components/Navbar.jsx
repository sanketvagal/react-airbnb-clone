import React from "react";
import airbnbLogo from '../assets/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} className="nav--logo" />
            {/* <h3 className="nav--logo_text"> ReactFacts </h3>
            <h4 className="nav--title"> React Course - Project 1</h4> */}
        </nav>
    )
}