import { useChat } from "../../context/ChatContext";
import { useState } from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import MessageSection from "../MessageSection/MessageSection";
import MessageForm from "../MessageForm/MessageForm"

interface Message {
  id: number;
  content: string;
  time: string;
  type: "right" | "left";
}

function ChatWindow() {
  const { selectedChat } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (text: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now(),
        content: text.trim(),
        type: "right",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="chat-window" style={{ width: "70%" }}>
      {selectedChat ? (
        <>
          <ChatHeader 
            firstName={selectedChat.first_name} 
            lastName={selectedChat.last_name} 
          />
          <MessageSection messages={messages} />
          <MessageForm chatId={selectedChat._id} onSendMessage={handleSendMessage} />
        </>
      ) : (
        <p>Select a chat to start messaging</p>
      )}
    </div>
  );
};

export default ChatWindow;
