
import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../src/assets/images/logo.png'



function Header(props) {
    return (
        <div className='bg-blue-800 text-white flex flex-row justify-between items-screen px-12 py-4 items-center'>
            <div>
                <Link to='/'>
                <img className='w-20' 
      src={Logo}
      alt="new"
      />
                </Link>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4'>
            <Link to='/cart'>
                <p>Cart</p>
            </Link>
            <Link to='/profile'>
                <p>Profile</p>
            </Link>

            </div>
        </div>
    );
}

export default Header;