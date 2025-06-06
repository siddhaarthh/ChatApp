import React from 'react';
import { CheckCircle, Circle, AlertCircle, Clock } from 'lucide-react';
import { Filter } from '../types';

interface FilterBarProps {
  activeFilter: Filter;
  setActiveFilter: (filter: Filter) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, setActiveFilter }) => {
  const filters: { id: Filter; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Tasks', icon: null },
    { id: 'active', label: 'Active', icon: <Circle size={16} /> },
    { id: 'completed', label: 'Completed', icon: <CheckCircle size={16} /> },
    { id: 'high', label: 'High Priority', icon: <AlertCircle size={16} /> },
    { id: 'medium', label: 'Medium Priority', icon: <Clock size={16} /> },
    { id: 'low', label: 'Low Priority', icon: <Clock size={16} /> },
  ];

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex space-x-2 md:space-x-4 min-w-max">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`px-3 py-2 text-sm rounded-md flex items-center gap-1.5 transition-colors duration-200 ${
              activeFilter === filter.id
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.icon}
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;