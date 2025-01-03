import { chats } from "../../data";
import ChatItem from "../ChatItem/ChatItem";
import SearchChat from "../SearchChat/SearchChat";
import CreateChatForm from "../CreateChatForm/CreateChatForm";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <SearchChat />
      <div style={{ display: "flex", flexDirection: "column", alignContent: "space-between" }}>
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
        <CreateChatForm />
      </div>
    </div>
  );
};

export default SideBar;
