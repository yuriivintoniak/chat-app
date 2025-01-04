import "./ChatItem.css";

type ChatItemProps = {
  firtName: string;
  lastName: string;
  lastMessage: string;
  lastMessageDate: string;
};

const ChatItem = ({ firtName, lastName, lastMessage, lastMessageDate }: ChatItemProps) => {
  return (
    <div className="chat-item">
      <div className="chat-item-info">
        <h1>{firtName} {lastName}</h1>
        <div className="chat-content">
          <p>{lastMessage}</p>
          <span>{lastMessageDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
