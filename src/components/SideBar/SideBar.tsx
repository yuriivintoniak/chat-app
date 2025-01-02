import { chats } from "../../data";
import ChatItem from "../ChatItem/ChatItem";
import SearchChat from "../SearchChat/SearchChat";
import "./SideBar.css";

function SideBar() {
  return (
    <div style={{ width: "30%", borderRight: "1px solid #ccc" }}>
      <SearchChat />
      <div className="chat-list">
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            username={chat.username}
            lastMessage={chat.lastMessage}
            lastMessageDate={chat.lastMessageDate}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
