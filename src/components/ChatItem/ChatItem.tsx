import "./ChatItem.css";

type ChatItemProps = {
  username: string;
  lastMessage: string;
  lastMessageDate: string;
};

const ChatItem = ({ username, lastMessage, lastMessageDate }: ChatItemProps) => {
  return (
    <div className="chat-item">
      <div className="chat-item-info">
        <h1>{username}</h1>
        <div className="chat-content">
          <p>{lastMessage}</p>
          <span>{lastMessageDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
