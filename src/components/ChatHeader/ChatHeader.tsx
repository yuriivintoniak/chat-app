import "./ChatHeader.css";

interface ChatHeaderProps {
  firstName: string;
  lastName: string;
}

function ChatHeader({ firstName, lastName }: ChatHeaderProps) {
  return (
    <div className="container">
      <h3 className="username">{firstName} {lastName}</h3>
    </div>
  );
}

export default ChatHeader;
