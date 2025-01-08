const Message = require("../models/message.model");
const axios = require("axios");

exports.sendMessage = async (req, res) => {
  const { chatId, content, type } = req.body;

  if (!content || !content.trim()) {
    return res.status(400).json({ message: "Invalid text" });
  }

  try {
    const newMessage = new Message({
      chat_id: chatId,
      content: content,
      type: type,
    });

    const sentMessage = await newMessage.save();

    const quoteResponse = await axios.get("https://zenquotes.io/api/random");
    const randomQuote = quoteResponse.data[0].q;

    const autoQuoteMessage = new Message({
      chat_id: chatId,
      content: randomQuote,
      type: "left",
    });

    const savedAutoQuote = await autoQuoteMessage.save();

    res.status(201).json({
      message: "Message sent!",
      sentMessage,
      autoQuote: savedAutoQuote,
    });
  } catch (error) {
    console.error("Error sending message or saving quote:", error);
    res.status(500).json({ message: "Failed to send message or quote" });
  }
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
