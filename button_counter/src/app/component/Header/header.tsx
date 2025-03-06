// Header.js

import Link from 'next/link';
import React from 'react';
import styles from './header.module.css'; // Import the CSS module

const Header = () => {
  const navItems = [
    { title: 'Home', href: '/home' },
    { title: 'Create an account', href: '/create-account' },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.navListWrapper}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;