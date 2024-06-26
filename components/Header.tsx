// Import necessary modules and components
'use client';
import React, { useState } from 'react';
import Logo from './Logo'; // Import the Logo component
import menuItems from '@/constants/menuItems'; // Import the menu items from a constants file
import MenuButton from './Menu/MenuButton';
import MenuItem from './Menu/MenuItem';
import MobileMenu from './Menu/MobileMenu';
import Container from './Container';
import FadeInWhenVisible from './FadeInWhenVisible';

// Define the Header component
export const Header = () => {
  // Use state to track whether the menu and sub-menu are open or not
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // Function to toggle the main menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Function to toggle the sub-menu
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <header className=''>
      <Container>
        <nav
          className='flex items-center justify-between py-6 lg:py-10'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <Logo /> {/* Render the Logo component here */}
          </div>
          <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />{' '}
          {/* Render the MenuButton component here */}
          <div className='hidden lg:flex lg:gap-x-12'>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                menuItem={menuItem}
                toggleSubMenu={toggleSubMenu}
                isSubMenuOpen={isSubMenuOpen}
                toggleMenu={toggleMenu}
              />
            ))}
          </div>
        </nav>
        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
        {isMenuOpen && (
          <MobileMenu
            isMenuOpen={isMenuOpen}
            isSubMenuOpen={isSubMenuOpen}
            toggleSubMenu={toggleSubMenu}
            toggleMenu={toggleMenu}
          />
        )}
      </Container>
    </header>
  );
};

export default Header;
