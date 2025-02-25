'use client';

import { useState } from 'react';
import { ThemeToggle } from "./themeToggle";
import ContactModal from './ContactModal';

const styles = {
  nav: 'fixed top-0 w-full bg-white/70 dark:bg-gray-950/70 backdrop-blur-md z-50 shadow-md left-0 right-0',
  container: 'max-w-7xl mx-auto px-6 sm:px-8 lg:px-12',
  content: 'flex items-center justify-between h-20',
  logo: 'font-bold text-2xl text-gray-800 dark:text-white hover:scale-110 transition-transform duration-200',
  buttons: 'flex gap-6 items-center',
  navLink: 'text-gray-800 dark:text-white hover:scale-110 transition-transform duration-200',
  primaryButton: 'px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600',
  secondaryButton: 'px-4 py-2 border border-gray-800 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg dark:bg-white dark:border-white dark:text-gray-800 dark:hover:bg-gray-100',
  modal: `
    fixed top-1/2 left-1/2 transform -translate-x-1/2 
    w-full max-w-lg bg-white dark:bg-gray-900 
    rounded-xl shadow-xl z-50 p-6
    transition-all duration-300 ease-out
  `,
  mobileMenuButton: 'lg:hidden text-gray-800 dark:text-white hover:scale-110 transition-transform duration-200',
  mobileMenu: 'lg:hidden fixed inset-0 bg-white/95 dark:bg-gray-950/95 z-40 transition-transform duration-300 ease-in-out',
  mobileMenuContent: 'flex flex-col items-center justify-center h-full gap-8 text-xl',
  desktopButtons: 'hidden lg:flex gap-6 items-center',
};

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Professional Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#findme', label: 'Find Me' },
  ];

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.content}>
            <a href="#hero" className={styles.logo}>
              RV
            </a>

            <button 
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {!isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>

            <div className={styles.desktopButtons}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
              <ThemeToggle />
              <button
                onClick={() => setIsModalOpen(true)} 
                className={styles.secondaryButton}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div 
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className={styles.mobileMenuContent}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={handleNavLinkClick}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className={styles.secondaryButton}
          >
            Contact Me
          </button>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}