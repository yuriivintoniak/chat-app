import { ChatProvider } from "../../context/ChatContext";
import SideBar from "../SideBar/SideBar";
import ChatWindow from "../ChatWindow/ChatWindow";

function Layout() {
  return (
    <ChatProvider>
      <div 
        style={{ 
          display: "flex", 
          flexDirection: "row", 
          height: "100vh", 
        }}
      >
        <SideBar />
        <ChatWindow />
      </div>
    </ChatProvider>
  );
};

export default Layout;
