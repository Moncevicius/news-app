import React from "react";
import {Link} from "react-router-dom";

const NavHomeButton = () => {
    return <>
        <div className="home-button-container">
            <Link to="/" className="home-button">
                <h2>Home Page</h2>
            </Link>
        </div>
        <br />
    </>
}

export default NavHomeButton;