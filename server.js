const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000; // or any port you like

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// ADD THIS LINE to serve images from root level - MOVE IT HERE
app.use("/images", express.static(path.join(__dirname, "images")));

// Send index.html from "public" for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "card.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Your application is running on http://localhost:${PORT}`);
});
