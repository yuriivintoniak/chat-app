const Chat = require("../models/chat.model");

exports.createChat = async (req, res) => {
  const { first_name, last_name } = req.body;

  const newChat = new Chat({
    first_name,
    last_name,
    last_message: null,
    last_message_time: null,
  });

  newChat
    .save()
    .then((savedChat) => {
      res.status(201).json({
        message: "Chat created!",
        chat: savedChat,
      });
    })
    .catch((error) => console.log("error", error));
};

exports.getAllChats = (req, res) => {
  Chat.find()
    .then((chats) => {
      res.status(200).json(chats);
    })
    .catch((error) => {
      console.log("error", error);
      res.status(500).json({ message: "Failed to fetch chats", error });
    });
};

exports.deleteChat = (req, res) => {
  const { chatId } = req.params;

  Chat.findByIdAndDelete(chatId)
    .then((deletedChat) => {
      if (!deletedChat) {
        return res.status(404).json({ message: "Chat not found" });
      }
      res.status(200).json({ message: "Chat deleted!" });
    })
    .catch((error) => {
      console.error("Error deleting chat:", error);
      res.status(500).json({ message: "Error occurred while deleting the chat" });
    });
};
