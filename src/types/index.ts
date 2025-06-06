export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'bot';
}

export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
  avatar: string;
  messages: Message[];
}