import React from 'react';
import website_logo from '../../Photos/websitelogo.png';
import user_logo from '../../Photos/userlogo.jpg';
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {

    return (
        <div className='nav-container'>
            <div className='brandlogo'>
                <img className='nav-logo' src={website_logo} />
            </div>
            <div className='nav-links'>
                <ul className='nav-ul'>
                    <Link className='link-tag' to='/'>STORE</Link>
                    <Link className='link-tag' to='team'>TEAM</Link>
                    <Link className='link-tag' to='journey'>JOURNEY</Link>
                    <Link className='link-tag' to='contact'>CONTACT</Link>
                </ul>
            </div>
            <div  className='brandlogo'>
                <img className='user-logo' src={user_logo} />
                <p>User</p>
            </div>
        </div>

    )
}

export default Navbar