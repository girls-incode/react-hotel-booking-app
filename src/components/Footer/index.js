import React from 'react';
import './styles.scss'

function Footer() {
    return (
        <footer className='footer mt-5'>
            <ul className='d-flex justify-content-center align-items-center py-4'>
                <li>
                    <span className='ico ico-logo'></span>
                </li>
                <li>
                    <a href='/'>Terms &amp; Conditions</a>
                </li>
                <li>
                    <a href='/'>Privacy Policy</a>
                </li>
                <li className='flex-grow-1'>
                    <a href='/'>Partners</a>
                </li>
                <li>
                    <a href='/'>reservations@loscocosbungalows.com</a>
                </li>
                <li >
                    <a href='/'>Tlf: +34 987 675 432</a>
                </li>
                <li >
                    <span className='ico ico-social'></span>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
