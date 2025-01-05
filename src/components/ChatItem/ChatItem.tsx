import { FaTrash } from "react-icons/fa";
import "./ChatItem.css";

type ChatItemProps = {
  chatId: string;
  firtName: string;
  lastName: string;
  lastMessage: string;
  lastMessageDate: string;
  onDelete: (chatId: string) => void;
};

const ChatItem = ({ 
  chatId, 
  onDelete, 
  firtName, 
  lastName, 
  lastMessage, 
  lastMessageDate 
}: ChatItemProps) => {

  return (
    <div className="chat-item">
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
