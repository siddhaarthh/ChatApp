import React from 'react';
import { format } from 'date-fns';
import { Chat } from '../types';
import clsx from 'clsx';

interface ChatListProps {
  chats: Chat[];
  selectedChat: string | null;
  onSelectChat: (chatId: string) => void;
  isCollapsed: boolean;
}

function ChatList({ chats, selectedChat, onSelectChat, isCollapsed }: ChatListProps) {
  return (
    <div 
      className={clsx(
        'border-r border-gray-200 dark:border-gray-700 overflow-y-auto transition-all duration-300',
        isCollapsed ? 'w-20' : 'w-80'
      )}
    >
      {chats.map(chat => (
        <div
          key={chat.id}
          className={clsx(
            'flex items-center p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-200 dark:border-gray-700',
            selectedChat === chat.id && 'bg-blue-50 dark:bg-gray-700'
          )}
          onClick={() => onSelectChat(chat.id)}
        >
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          {!isCollapsed && (
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium dark:text-white">{chat.name}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {format(chat.timestamp, 'HH:mm')}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                {chat.lastMessage}
              </p>
            </div>
          )}
          {chat.unread > 0 && (
            <span className="ml-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {chat.unread}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default ChatList;