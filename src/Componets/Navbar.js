import React from 'react'
import logo from '../images/zoom.png';
import '../styleComponent/Navbar.css';
function Navbar() {
    return (
        <header>
            <div className="header_logo">
              <i class="fas fa-bars"></i>
                <img src={logo} alt="hamburger-logo"/>
            </div>
            <nav>
                <ul>
                    <li>Become A host</li>
                    <li>ZMS</li>
                    <li>Login/Signup</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;
