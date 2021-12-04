import React    from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const showNavigation = () => (
        <nav className='navbar navbar-expand-lg navbar-light bg-main'>
            <Link to='/' className='navbar-brand text-white'>
                Logo
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarTogglerDemo02'
                aria-controls='navbarTogglerDemo02'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'/>
            </button>
            <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
                <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>

                    <li className='nav-item'>
                        <Link to='/home' className='nav-link text-white'>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/signup' className='nav-link text-white'>
                            Sign Up
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/signin' className='nav-link text-white'>
                            Sign In
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );

    return <header className='header'>{ showNavigation() }</header>;
};

export default Header;