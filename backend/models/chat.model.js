const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const chatSchema = new Schema({
  first_name: { 
    type: String, 
    required: true,
  },
  last_name: { 
    type: String, 
    required: true, 
  },
  last_message: { 
    type: String, 
    default: null, 
  },
  last_message_time: { 
    type: Date, 
    default: null, 
  },
  messages: [{
    type: ObjectId,
    ref: "Message",
  }],
});

module.exports = mongoose.model("Chat", chatSchema);
