const express = require("express");
const app = express();
const { initializeDB } = require("./src/config/db-config");

app.get("/", (req, res) => {
  res.json({ res: "Hello World!" });
});

const port = process.env.PORT || 3000;

const server = app.listen(port, async () => {
  await initializeDB();
  console.log(`Express running → PORT ${port}`);
});

server.on("error", (err) => {
  console.error("Server error:", err);
});
