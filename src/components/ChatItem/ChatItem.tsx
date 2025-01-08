import { FaTrash } from "react-icons/fa";
import "./ChatItem.css";

type ChatItemProps = {
  chatId: string;
  firtName: string;
  lastName: string;
  lastMessage: string;
  lastMessageDate: string;
  onDelete: (chatId: string) => void;
  onClick: (chatData: {
    chatId: string;
    firtName: string;
    lastName: string;
    lastMessage: string;
    lastMessageDate: string;
  }) => void;
};

const ChatItem = ({ 
  chatId,
  onClick,
  onDelete, 
  firtName, 
  lastName, 
  lastMessage, 
  lastMessageDate 
}: ChatItemProps) => {

  const handleClick = () => {
    onClick({ chatId, firtName, lastName, lastMessage, lastMessageDate });
  };

  return (
    <div onClick={handleClick} className="chat-item">
      <div className="chat-item-info">
        <h1>{firtName} {lastName}</h1>
        <div className="chat-content">
          <p>{lastMessage}</p>
          <span>{lastMessageDate}</span>
        </div>
      </div>
      <button className="delete-btn" onClick={() => onDelete(chatId)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default ChatItem;
