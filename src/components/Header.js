import React from "react";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">BIT Persons</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a><i className="fas fa-redo-alt"></i></a></li>
                    <li><a><i className="fas fa-th"></i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header