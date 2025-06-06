import React from 'react';
import { MessageCircle, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: (value: boolean) => void;
}

function Navbar({ isDarkMode, onToggleDarkMode }: NavbarProps) {
  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white px-4 py-3 flex items-center justify-between shadow-md fixed w-full z-10">
      <div className="flex items-center">
        <MessageCircle className="w-6 h-6 mr-2" />
        <h1 className="text-xl font-semibold">Chat App</h1>
      </div>
      <button
        onClick={() => onToggleDarkMode(!isDarkMode)}
        className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-gray-700"
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </nav>
  );
}

export default Navbar;