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
