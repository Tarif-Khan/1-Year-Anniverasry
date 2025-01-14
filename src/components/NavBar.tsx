import React from 'react';
import { Heart, List, Mail } from 'lucide-react';
import styles from '../styles/NavBar.module.css';

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavBar = ({ activeTab, setActiveTab }: NavBarProps) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Heart },
    { id: 'reasons', label: 'Reasons Why I Love You', icon: List },
    { id: 'letter', label: 'Letter', icon: Mail },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navItems}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`${styles.navButton} ${
                activeTab === item.id ? styles.navButtonActive : styles.navButtonInactive
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className={styles.navButtonText}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;