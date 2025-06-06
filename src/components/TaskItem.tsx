import React from 'react';
import { CheckCircle, Circle, Trash2, Clock, AlertCircle } from 'lucide-react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  const priorityIcons = {
    low: <Clock className="w-4 h-4 mr-1" />,
    medium: <Clock className="w-4 h-4 mr-1" />,
    high: <AlertCircle className="w-4 h-4 mr-1" />,
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-sm p-4 border-l-4 ${
        task.completed ? 'border-green-500' : 
        task.priority === 'high' ? 'border-red-500' : 
        task.priority === 'medium' ? 'border-yellow-500' : 
        'border-blue-500'
      } transition-all duration-200 hover:shadow-md`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 
          className={`font-medium text-lg ${
            task.completed ? 'line-through text-gray-500' : 'text-gray-800'
          }`}
        >
          {task.title}
        </h3>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onToggle(task.id)}
            className="text-gray-400 hover:text-green-500 transition-colors duration-200"
            aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {task.completed ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <Circle className="w-5 h-5" />
            )}
          </button>
          <button 
            onClick={() => onDelete(task.id)}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            aria-label="Delete task"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <p className={`text-sm mb-4 ${
        task.completed ? 'text-gray-500' : 'text-gray-600'
      }`}>
        {task.description}
      </p>

      <div className="flex justify-between items-center">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
          {priorityIcons[task.priority]}
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
        </span>
        
        <span className="text-xs text-gray-500">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;