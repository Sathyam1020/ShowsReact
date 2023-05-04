import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav className='fixed w-full py-4 bg-blue-800 shadow-xl z-1'>
            <Link to='/'>
                <h1 className='text-3xl font-bold text-center text-white'>
                    Mov Mov Movie
                </h1>
            </Link>
        </nav>
    </div>
  )
}

export default Header;