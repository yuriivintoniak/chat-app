const Message = require("../models/message.model");

exports.sendMessage = (req, res) => {
  const { chatId, content } = req.body;

  const newMessage = new Message({
    chat_id: chatId,
    content: content,
  });

  newMessage
    .save()
    .then((sentMessage) => {
      res.status(201).json({
        message: "Message sent!",
        data: sentMessage,
      });
    })
    .catch((error) => {
      console.log("Error sending message:", error);
      res.status(500).json({ message: "Failed to send message" });
    });
};

exports.getAllMessages = (req, res) => {
  const { chatId } = req.params;

  Message.find({ chat_id: chatId })
    .then((messages) => {
      res.status(200).json(messages);
    })
    .catch((error) => {
      console.log("Error fetching messages:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    });
};
