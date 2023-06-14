const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ res: "Hello World!" });
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Express running → PORT ${port}`);
});

server.on("error", (err) => {
  console.error("Server error:", err);
});
