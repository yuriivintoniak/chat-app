import { IoSendSharp } from "react-icons/io5";
import React, { useState } from "react";
import "./MessageForm.css";

interface MessageFormProps {
  onSendMessage: (text: string) => void;
}

function MessageForm({ onSendMessage }: MessageFormProps) {
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
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
