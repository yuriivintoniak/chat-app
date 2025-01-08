const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message.controller");

router.post("/message", messageController.sendMessage);
router.get("/messages/:chatId", messageController.getAllMessages);
router.delete("/message/:messageId", messageController.deleteMessage);

module.exports = router;
