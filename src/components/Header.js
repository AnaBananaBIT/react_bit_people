import React from "react";
import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">BIT Persons</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about"><i class="fas fa-info-circle"></i></Link></li>
                    <li><a onClick={props.onRefresh}><i className="fas fa-redo-alt"></i></a></li>
                    <li><a onClick={props.onToggleClick} ><i className="fas fa-th"></i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header