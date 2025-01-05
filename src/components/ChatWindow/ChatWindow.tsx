import ChatHeader from "../ChatHeader/ChatHeader";
import MessageSection from "../MessageSection/MessageSection";
import MessageForm from "../MessageForm/MessageForm"

function ChatWindow() {
  return (
    <div className="chat-window" style={{ width: "70%" }}>
      <ChatHeader />
      <MessageSection />
      <MessageForm />
    </div>
  );
};

export default ChatWindow;
