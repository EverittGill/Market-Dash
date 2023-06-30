import React, { useState } from 'react';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full'>
      <nav className='bg-header h-20 flex items-center justify-between md:justify-end'>
        <div className='flex items-center'>
          <button
            className='lg:hidden md:hidden text-white text-3xl mx-4'
            onClick={handleMenuToggle}
            aria-label='Open Menu'
          >
            <FiMenu />
          </button>
          <h3 className='lg:text-xl md:text-base hidden md:block text-white mx-3'>
            About Us
          </h3>
          <h3 className='lg:text-xl md:text-base hidden md:block text-white mx-3'>
            Contact Us
          </h3>
          <h3 className='lg:text-xl md:text-base hidden md:block text-white mx-3'>
            Login
          </h3>
        </div>
        <div className='flex items-center'>
          <FiShoppingCart className='text-white text-3xl mx-9' />
        </div>
      </nav>
      {isMenuOpen && (
        <div className='bg-gray-800 text-white px-2 py-3'>
          <a
            href='#'
            className='block py-2 px-4 text-sm hover:bg-gray-700'
          >
            About Us
          </a>
          <a
            href='#'
            className='block py-2 px-4 text-sm hover:bg-gray-700'
          >
            Contact Us
          </a>
          <a
            href='#'
            className='block py-2 px-4 text-sm hover:bg-gray-700'
          >
            Login
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
