import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/imgs/logo.png" alt="Our logo" />
            </div>
            <ul>
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Hero</a></li>
            <li><a href="#!">Contact</a></li>
            <li><a href="#!">Address</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;