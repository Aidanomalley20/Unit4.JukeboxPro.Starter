const express = require("express");
const authRoutes = require("./routes/auth");
const playlistRoutes = require("./routes/playlists");
const trackRoutes = require("./routes/tracks");
const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/playlists", playlistRoutes);
app.use("/tracks", trackRoutes);
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

module.exports = app;
