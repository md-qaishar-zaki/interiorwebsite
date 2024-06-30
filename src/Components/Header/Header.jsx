import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 250) { // Adjust this value as per your requirement
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleProjectClick = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <header>
      <div className="border-gray-200 px-4 lg:px-6 dark:bg-neutral-100">
        <div className="content container mx-auto flex flex-row justify-between topHeader">
          <div className="flex flex-row justify-between w-100 contact items-center">
            <div className="flex px-2">
              <i className="bi-telephone-fill px-2"></i>
              <p>+91 7633953812</p>
            </div>
            <div className="flex px-2">
              <i className="bi-envelope-fill px-2"></i>
              <p>abc@gmail.com</p>
            </div>
          </div>
          <div className="social-media flex flex-row justify-between">
            <i className="bi-facebook"></i>
            <i className="bi-twitter"></i>
            <i className="bi-instagram"></i>
            <i className="bi-youtube"></i>
          </div>
        </div>
        <div className="yellowPanel"></div>
      </div>
      <nav className={`border-gray-200 px-4 lg:px-6 py-1 ${isHeaderFixed ? 'fixed' : ''}`}>
        <div className="flex flex-wrap justify-between items-center container mx-auto">
          <a href="https://flowbite.com" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <button className="text-gray-700 lg:hidden toggleMenu" onClick={toggleMenu}>
            <i className="bi-list text-2xl"></i>
          </button>
          <ul className="hidden lg:flex lg:flex-row lg:space-x-8">
            <li>
              <NavLink to="/" className="block py-2 pr-4 pl-3 rounded lg:p-0" aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Services" className="block py-2 pr-4 pl-3 rounded lg:p-0">Services</NavLink>
            </li>
            <li>
              <a onClick={() => handleProjectClick('Project')} className="block py-2 pr-4 pl-3 rounded lg:p-0">Projects</a>
            </li>
            <li>
              <a onClick={() => handleProjectClick('About')} className="block py-2 pr-4 pl-3 rounded lg:p-0">About Us</a>
            </li>
            <li>
              <a onClick={() => handleProjectClick('Contact')} className="block py-2 pr-4 pl-3 rounded lg:p-0">Contact Us</a>
            </li>
          </ul>
          <NavLink to="/get-started" className="navBtn hidden lg:block">Get A Quote</NavLink>
        </div>
      </nav>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={toggleMenu}>
          <i className="bi-x-lg text-2xl"></i>
        </button>
        <ul className="flex flex-col mt-4 font-medium">
          <li>
            <NavLink to="/" className="block py-2 pr-4 pl-3 rounded" aria-current="page" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Services" className="block py-2 pr-4 pl-3 rounded" onClick={toggleMenu}>Services</NavLink>
          </li>
          <li>
            <a onClick={handleProjectClick} className="block py-2 pr-4 pl-3 rounded">Projects</a>
          </li>
          <li>
            <NavLink to="/About" className="block py-2 pr-4 pl-3 rounded" onClick={toggleMenu}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="block py-2 pr-4 pl-3 rounded" onClick={toggleMenu}>Contact Us</NavLink>
          </li>
        </ul>
        <NavLink to="/get-started" className="navBtn mt-4 w-full text-center" onClick={toggleMenu}>Get A Quote</NavLink>
      </div>
    </header>
  );
}
