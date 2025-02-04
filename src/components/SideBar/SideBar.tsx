import { useState, useEffect } from "react";
import { useChat } from "../../context/ChatContext";
import ChatItem from "../ChatItem/ChatItem";
import SearchChat from "../SearchChat/SearchChat";
import CreateChatForm from "../CreateChatForm/CreateChatForm";
import axios from "axios";
import "./SideBar.css";

interface Chat {
  _id: string;
  first_name: string;
  last_name: string;
  last_message: string | null;
  last_message_time: string | null;
}

function SideBar() {
  const [chats, setChats] = useState<Chat[]>([]);
  const { selectedChat, setSelectedChat } = useChat();
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/chats")
      .then((response) => {
        setChats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching chats:", error);
      });
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredChats = chats.filter((chat) => {
    const fullName = `${chat.first_name} ${chat.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  const handleSelectChat = (chat: Chat) => {
    setSelectedChat(chat);
    console.log("Selected chat:", chat);
  };

  const handleDelete = async (chatId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/chat/${chatId}`);
      setChats((prevChats) => prevChats.filter((chat) => chat._id !== chatId));
    } catch (error) {
      console.error("Error deleting chat:", error);
    }
  };

  return (
    <div className="side-bar">
      <SearchChat value={searchQuery} onSearch={handleSearch} />
      <div>
        <div className="chat-list">
          {filteredChats.map((chat) => (
            <ChatItem
              key={chat._id}
              chatId={chat._id}
              onDelete={handleDelete}
              onClick={() => handleSelectChat(chat)}
              firtName={chat.first_name}
              lastName={chat.last_name}
              lastMessage={chat.last_message || ""}
              lastMessageDate={chat.last_message_time || ""}
              isSelected={selectedChat?._id === chat._id}
            />
          ))}
        </div>
        <CreateChatForm />
      </div>
    </div>
  );
};

export default SideBar;
