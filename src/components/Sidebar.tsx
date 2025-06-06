import React from 'react';
import { ChevronLeft, ChevronRight, Settings, Users, Bell } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <div className={`bg-gray-100 dark:bg-gray-900 ${isOpen ? 'w-16' : 'w-0'} transition-all duration-300 flex flex-col items-center py-4`}>
      <button
        onClick={onToggle}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
      {isOpen && (
        <>
          <button className="p-2 mt-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
            <Users />
          </button>
          <button className="p-2 mt-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
            <Bell />
          </button>
          <button className="p-2 mt-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
            <Settings />
          </button>
        </>
      )}
    </div>
  );
}

export default Sidebar;