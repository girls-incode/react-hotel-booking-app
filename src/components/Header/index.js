import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Header() {
    return (
        <header className='header'>
            <nav className='container d-flex align-items-center justify-content-center py-3 nav'>
                <NavLink to='/' exact>
                    Home
                </NavLink>
                <NavLink to='/'>
                    Rooms
                </NavLink>
                <NavLink to='/'>
                    Restaurant
                </NavLink>
                <NavLink to='/'>
                    <img src="/images/logo.png" className='logo' alt="Los Cocos Bungalows" />
                </NavLink>
                <NavLink to='/'>
                    Weddings
                </NavLink>
                <NavLink to='/'>
                    Membership
                </NavLink>
                <NavLink to='/'>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;
