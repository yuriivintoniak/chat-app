import "./MessageSection.css";

interface Message {
  id: number;
  text: string;
  time: string;
  type: "right" | "left";
}

interface MessageSectionProps {
  messages: Message[];
}

function MessageSection({ messages }: MessageSectionProps) {
  return (
    <div className="message-section">
      {messages.map((message) => (
        <div key={message.id} className={`message ${message.type}`}>
          <p className="message-text">{message.text}</p>
          <span className={`message-time ${message.type}`}>
            {message.time}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MessageSection;
