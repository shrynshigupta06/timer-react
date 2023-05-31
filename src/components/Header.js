import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'


const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">Time App</span>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Count Down Timer</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/world-clock" className="nav-link">World Clock</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;