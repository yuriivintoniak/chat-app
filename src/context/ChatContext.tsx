import React, { createContext, useState, ReactNode } from "react";

interface Chat {
  _id: string;
  first_name: string;
  last_name: string;
  last_message: string | null;
  last_message_time: string | null;
}

interface ChatContextType {
  selectedChat: Chat | null;
  setSelectedChat: (chat: Chat | null) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <ChatContext.Provider value={{ selectedChat, setSelectedChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = React.useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used inside a ChatProvider");
  }
  return context;
};
