const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(port, () => {
  connectToDatabase();
  console.log(`Server is running on http://localhost:${port}`);
});
