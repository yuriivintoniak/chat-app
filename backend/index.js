const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/db");
const chatRoutes = require("./routes/chat.route");

require("dotenv").config();

connectToDatabase();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", chatRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
