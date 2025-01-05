import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";
import "./MessageForm.css";

function MessageForm() {
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  return (
    <div className="message-form-container">
      <form className="message-form">
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
