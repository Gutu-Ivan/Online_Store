import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    const showNavigation = () => (
        <nav class='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/' class='navbar-brand'>
                Logo
            </Link>
            <button
                class='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarTogglerDemo02'
                aria-controls='navbarTogglerDemo02'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span class='navbar-toggler-icon'></span>
            </button>

            <div class='collapse navbar-collapse' id='navbarTogglerDemo02'>
                <ul class='navbar-nav ml-auto mt-2 mt-lg-0'>
                    <li className='nav-item'>
                        <Link to='/home' class='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li class='nav-item'>
                        <Link to='/signup' class='nav-link'>
                            Sign Up
                        </Link>
                    </li>
                    <li class='nav-item'>
                        <Link to='/signin' class='nav-link'>
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
    return <header id='header'>{showNavigation()}</header>;
};

export default Header;