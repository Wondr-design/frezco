
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../constants';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  const activeLinkStyle = {
    color: '#ED792C',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  };

  const renderNavLinks = (isMobile: boolean) => (
    <>
      {navLinks.map((link) => {
        if (link.dropdown) {
          return (
            <li key={link.name} className="relative group" ref={dropdownRef}>
              <button
                onClick={() => setProductsDropdownOpen(!isProductsDropdownOpen)}
                className={`w-full text-left px-4 py-2 text-lg hover:text-brand-primary transition-colors duration-300 ${isMobile ? '' : 'inline-flex items-center'}`}
              >
                {link.name}
                <svg className={`w-4 h-4 ml-1 transform transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isProductsDropdownOpen && (
                <ul className={`${isMobile ? 'pl-4' : 'absolute z-20 bg-brand-background shadow-lg rounded-md mt-2 py-1 w-48'}`}>
                  {link.dropdown.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.path}
                        onClick={closeMenus}
                        style={({ isActive }) => isActive ? activeLinkStyle : {}}
                        className="block px-4 py-2 text-lg hover:bg-brand-primary hover:text-white transition-colors duration-300"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        }
        return (
          <li key={link.name}>
            <NavLink
              to={link.path}
              onClick={closeMenus}
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
              className="block px-4 py-2 text-lg hover:text-brand-primary transition-colors duration-300"
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </>
  );

  return (
    <header className="bg-brand-background/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-brand-secondary tracking-tight">
          Il Frezco
        </Link>
        <nav className="hidden lg:flex items-center space-x-2">
          <ul className="flex items-center space-x-2">
            {renderNavLinks(false)}
          </ul>
          <Link to="/contact">
            <Button>Send Request</Button>
          </Link>
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-secondary focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-background pb-4">
          <nav>
            <ul className="flex flex-col space-y-2">
              {renderNavLinks(true)}
            </ul>
             <div className="px-4 mt-4">
               <Link to="/contact" className="w-full" onClick={closeMenus}>
                <Button fullWidth>Send Request</Button>
               </Link>
             </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
