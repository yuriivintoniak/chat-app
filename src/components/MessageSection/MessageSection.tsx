import { IoClose } from "react-icons/io5";
import "./MessageSection.css";

interface Message {
  _id: number;
  content: string;
  time: string;
  type: "right" | "left";
}

interface MessageSectionProps {
  messages: Message[];
  onDelete: (id: number) => void;
}

function MessageSection({ messages, onDelete }: MessageSectionProps) {
  return (
    <div className="message-section">
      {messages.map((message) => (
        <div key={message._id} className={`message ${message.type}`}>
          <p className="message-text">{message.content}</p>
          <span className={`message-time ${message.type}`}>{message.time}</span>
          {message.type === "right" && (
            <div className="options-icon" onClick={() => onDelete(message._id)}>
              <IoClose />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageSection;
