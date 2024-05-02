import React from 'react';
import SubMenuItem from './SubMenuItem'; // Importing a component for submenu items
import Link from 'next/link'; // Importing a component for navigation links
import { usePathname } from 'next/navigation';

// Defining the properties expected by this MenuItem component
interface MenuItemProps {
  menuItem: any; // Data for the menu item
  toggleSubMenu: () => void; // Function to toggle submenu visibility
  isSubMenuOpen: boolean; // Boolean to track if submenu is open or closed
}

// This is a functional React component named MenuItem
const MenuItem: React.FC<MenuItemProps> = ({
  menuItem,
  toggleSubMenu,
  isSubMenuOpen,
}) => {
  const pathname = usePathname(); // Get the current pathname

  // If the menu item is a button (has `isButton` property), render a button
  if (menuItem.isButton) {
    return (
      <div className='relative' onClick={toggleSubMenu}>
        <button
          type='button'
          className='flex w-full items-center justify-between gap-x-1 py-3 lg:w-auto lg:py-0 '
        >
          {menuItem.title} {/* Display the menu item title */}
          <svg
            className={`h-5 w-5 flex-none ${isSubMenuOpen ? 'rotate-180' : ''}`}
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div
          className={`${
            isSubMenuOpen
              ? 'block lg:translate-y-0 lg:opacity-100 lg:transition lg:duration-200 lg:ease-out'
              : 'hidden lg:translate-y-1 lg:opacity-0 lg:transition lg:duration-150 lg:ease-in'
          }  lg:shadow-3xl z-10 overflow-hidden rounded-md border-black border-opacity-10 lg:absolute lg:left-0   lg:top-full lg:mt-7 lg:w-screen lg:max-w-md lg:border`}
        >
          {menuItem.items?.map((subItem: any, index: number) => (
            <SubMenuItem key={index} subItem={subItem} /> // Render submenu items
          ))}
        </div>
      </div>
    );
  } else {
    // If the menu item is not a button, render it as a navigation link
    return (
      <Link
        href={menuItem.href} // Set the link destination
        className={`block border-b-2 py-3 text-[13px] font-normal uppercase tracking-widest text-Grey-900 hover:text-black lg:py-0 ${
          pathname === menuItem.href ? 'border-black' : 'border-transparent'
        } text-blacks transform duration-300 hover:border-black`}
      >
        {menuItem.title} {/* Display the menu item title */}
      </Link>
    );
  }
};

export default MenuItem; // Export the MenuItem component for use in other parts of the application
