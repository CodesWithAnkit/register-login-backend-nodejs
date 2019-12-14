const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts.js");

// .env config
dotenv.config();

//Connection with DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("connected to DB");
});

// Middleware
app.use(express.json());

// Route Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => console.log("Running port: 3000"));
