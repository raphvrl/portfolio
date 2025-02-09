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
};

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.content}>
            <a href="#hero" className={styles.logo}>
              RV
            </a>
            <div className={styles.buttons}>
              <a href="#about" className={styles.navLink}>
                About
              </a>
              <a href="#projects" className={styles.navLink}>
                Projects
              </a>
              <a href="#experience" className={styles.navLink}>
                Professional Experience
              </a>
              <a href="#skills" className={styles.navLink}>
                Skills
              </a>
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
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}