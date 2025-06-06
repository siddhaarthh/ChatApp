import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import { Chat, Message } from './types';

const initialChats: Chat[] = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    timestamp: new Date(2024, 2, 10, 14, 30),
    unread: 2,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    messages: []
  },
  {
    id: '2',
    name: 'Jane Smith',
    lastMessage: 'See you tomorrow!',
    timestamp: new Date(2024, 2, 10, 13, 45),
    unread: 0,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    messages: []
  },
  {
    id: '3',
    name: 'Mike Johnson',
    lastMessage: 'The meeting is scheduled for 3 PM',
    timestamp: new Date(2024, 2, 10, 12, 15),
    unread: 1,
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    messages: []
  }
];

const botResponses = [
  "I'll get back to you soon!",
  "Thanks for your message!",
  "That's interesting, tell me more.",
  "I understand, please continue.",
  "Let me think about that."
];

function App() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSendMessage = (chatId: string, content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      sender: 'user'
    };

    setChats(prevChats => {
      return prevChats.map(chat => {
        if (chat.id === chatId) {
          return {
            ...chat,
            messages: [...(chat.messages || []), newMessage],
            lastMessage: content,
            timestamp: new Date()
          };
        }
        return chat;
      });
    });

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        content: botResponses[Math.floor(Math.random() * botResponses.length)],
        timestamp: new Date(),
        sender: 'bot'
      };

      setChats(prevChats => {
        return prevChats.map(chat => {
          if (chat.id === chatId) {
            return {
              ...chat,
              messages: [...(chat.messages || []), botMessage]
            };
          }
          return chat;
        });
      });
    }, 1000);
  };

  return (
    <div className={`h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <ChatList
          chats={chats}
          selectedChat={selectedChat}
          onSelectChat={setSelectedChat}
          isCollapsed={!isSidebarOpen}
        />
        <ChatWindow
          chat={chats.find(chat => chat.id === selectedChat) || null}
          onSendMessage={handleSendMessage}
        />
      </div>
      <footer className="bg-gray-100 dark:bg-gray-800 text-center py-2 text-sm text-gray-600 dark:text-gray-400">
        © 2024 Chat App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;