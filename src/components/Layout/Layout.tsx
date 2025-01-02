import SideBar from "../SideBar/SideBar";
import ChatWindow from "../ChatWindow/ChatWindow";

function Layout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar />
      <ChatWindow />
    </div>
  );
};

export default Layout;
