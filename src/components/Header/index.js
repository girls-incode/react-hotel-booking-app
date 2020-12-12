import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Header() {
    const [show, setShow] = useState(true);
    const showClass = show ? `d-flex text-center` : `d-none`;

    const getWindowSize = () => (window.innerWidth <= 567) ? setShow(false) : setShow(true);

    useEffect(() => {
        window.addEventListener('resize', getWindowSize);
        getWindowSize();
    }, []);

    return (
        <header className='header'>
            <nav className='container d-flex align-items-center justify-content-center py-3 nav'>
                <NavLink to='/' className='mobile-nav'>
                    <img src='/images/logo_mobile.png' alt='Cocos' height='36' />
                </NavLink>
                <div className={`menu ${showClass}`}>
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
                        <img src='/images/logo.png' className='logo' alt='Cocos' />
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
                </div>
                <div className='mobile-nav' onClick={() => setShow(!show)}>
                    <button className='navbar-toggle'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
