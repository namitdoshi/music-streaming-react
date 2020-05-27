import React from  'react'

import { Link } from 'react-router-dom'




const Header = () => (

    <div className = 'header'>
        <div className = 'options'>
            <Link className ='option' to = '/aboutus' >
                About us
            </Link>
            <Link className ='option' to = '/events' >
                Upcoming Events
            </Link>
            <Link className ='option' to = '/Signup' >
                Signup
            </Link>
            <Link className ='option' to = '/Contact' >
                Contact Us
            </Link>
        </div>
    </div>
);

export default Header;