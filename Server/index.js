require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(require("./routes/submit"));

app.get("/", (req, res) => {
  res.json("we are on home");
});


const url = process.env.MONGODB_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("Database connected on port 5000")
);

app.listen("5000");
