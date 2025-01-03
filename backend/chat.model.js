const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  last_message: { type: String, default: null },
  last_message_time: { type: Date, default: null },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
