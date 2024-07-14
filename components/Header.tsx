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
import { StoryblokComponent } from '@storyblok/react';
import DarkLightModeSwitch from './DarkLightModeSwitch';
import SocialLinks from './SocialLinks';

// Define the Header component
export const Header = ({ blok }: any) => {
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
    <>
      <header className='border-b border-light dark:border-dark w-full fixed top-0 left-0 bg-white dark:bg-Grey-900 z-50'>
        <nav
          className='flex items-center justify-between py-6 lg:py-6 px-6 lg:px-20'
          aria-label='Global'
        >
          <div className='flex lg:flex-1 fadeinItem fadeinItem--fall'>
            <Logo /> {/* Render the Logo component here */}
          </div>
          <div className='flex gap-6 items-center lg:hidden'>
            <DarkLightModeSwitch />
            <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />{' '}
          </div>
          {/* Render the MenuButton component here */}
          <div className='hidden lg:flex lg:gap-x-8 lg:items-center fadeinItem fadeinItem--fall'>
            {blok?.header_menu?.map((nestedBlok: any) => (
              <StoryblokComponent
                className=""
                blok={nestedBlok}
                key={nestedBlok._uid}
              />
            ))}
            <DarkLightModeSwitch />

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
      </header>
    </>
  );
};

export default Header;
