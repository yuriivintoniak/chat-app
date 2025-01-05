import "./MessageSection.css";

interface Message {
  text: string;
  time: string;
  type: "left" | "right";
}

function MessageSection() {
  const messages: Message[] = [
    { text: "Hi, how are you?", time: "8/17/2022, 7:43 AM", type: "left" },
    { text: "Not bad. What about you?", time: "8/17/2022, 7:45 AM", type: "right" },
    { text: "How was your meeting?", time: "8/17/2022, 7:48 AM", type: "left" },
  ];

  return (
    <div className="message-section">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.type}`}>
          <p className="message-text">{message.text}</p>
          <span className={`message-time ${message.type}`}>{message.time}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageSection;
