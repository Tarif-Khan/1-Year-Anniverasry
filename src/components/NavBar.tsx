import React from 'react';
import { Heart, List, Mail } from 'lucide-react';

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
    <nav className="bg-pink-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center space-x-2 py-4 px-6 transition-colors duration-300
                ${activeTab === item.id 
                  ? 'text-red-600 border-b-2 border-red-600' 
                  : 'text-gray-700 hover:text-red-600'}`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;