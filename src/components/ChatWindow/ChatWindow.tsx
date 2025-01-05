import { useState } from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import MessageSection from "../MessageSection/MessageSection";
import MessageForm from "../MessageForm/MessageForm"

interface Message {
  id: number;
  text: string;
  time: string;
  type: "right" | "left";
}

function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (text: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now(),
        text: text,
        type: "right",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="chat-window" style={{ width: "70%" }}>
      <ChatHeader />
      <MessageSection messages={messages} />
      <MessageForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
