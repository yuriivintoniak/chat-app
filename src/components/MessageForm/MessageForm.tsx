import { IoSendSharp } from "react-icons/io5";
import React, { useState } from "react";
import axios from "axios";
import "./MessageForm.css";

interface MessageFormProps {
  chatId: string;
  onSendMessage: (text: string) => void;
}

function MessageForm({ chatId, onSendMessage }: MessageFormProps) {
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message || !message.trim()) {
      console.error("Message content cannot be empty");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/message", {
        chatId: chatId,
        content: message.trim(),
        type: "right",
      });

      console.log("Server response:", response.data);

      onSendMessage(message);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="message-form-container">
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message"
          className="message-input"
        />
        <button type="submit" className="send-button">
          <IoSendSharp />
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
