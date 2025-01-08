const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const messageSchema = new Schema({
  chat_id: {
    type: ObjectId,
    ref: "Chat",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    enum: ["right", "left"],
    required: true,
    default: "left",
  },
});

module.exports = mongoose.model("Message", messageSchema);
