import React from 'react';
import './styles.scss'

function Footer() {
    return (
        <footer className='footer mt-5'>
            <ul className='d-flex flex-wrap justify-content-center align-items-center py-4'>
                <li>
                    <img src='/images/logo_mobile.png' alt='Cocos' height='36' />
                </li>
                <li>
                    <span className='ico ico-logo'></span>
                </li>
                <li>
                    <a href='/'>Terms &amp; Conditions</a>
                </li>
                <li>
                    <a href='/'>Privacy Policy</a>
                </li>
                <li>
                    <a href='/'>Partners</a>
                </li>
                <li>
                    <a href='/'>reservations@loscocosbungalows.com</a>
                </li>
                <li >
                    <a href='/'>Tlf: +34 987 675 432</a>
                </li>
                <li>
                    <div className='ico'></div>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
