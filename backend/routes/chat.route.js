const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chat.controller");

router.post("/chat", chatController.createChat);
router.get("/chats", chatController.getAllChats);

module.exports = router;
