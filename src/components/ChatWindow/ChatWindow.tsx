import { useChat } from "../../context/ChatContext";
import { useState, useEffect } from "react";
import axios from "axios";
import ChatHeader from "../ChatHeader/ChatHeader";
import MessageSection from "../MessageSection/MessageSection";
import MessageForm from "../MessageForm/MessageForm"

interface Message {
  _id: number;
  content: string;
  time: string;
  type: "right" | "left";
}

function ChatWindow() {
  const { selectedChat } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (selectedChat) {
      axios
        .get(`http://localhost:5000/api/messages/${selectedChat._id}`)
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => {
          console.error("Error loading messages:", error);
        });
    }
  }, [selectedChat]);

  const handleDeleteMessage = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/message/${id}`);
      setMessages((prevMessages) => prevMessages.filter((message) => message._id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleSendMessage = (text: string, type: "right" | "left") => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        _id: Date.now(),
        content: text.trim(),
        type: type,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="chat-window" style={{ width: "70%" }}>
      {selectedChat ? (
        <>
          <ChatHeader firstName={selectedChat.first_name} lastName={selectedChat.last_name} />
          <MessageSection messages={messages} onDelete={handleDeleteMessage} />
          <MessageForm chatId={selectedChat._id} onSendMessage={handleSendMessage} />
        </>
      ) : (
        <p>Select a chat to start messaging</p>
      )}
    </div>
  );
};

export default ChatWindow;
