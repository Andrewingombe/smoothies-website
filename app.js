const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

//connect to database
mongoose
  .connect("mongodb://localhost:27017/smoothies-db")
  .then(() => {
    app.listen(3000, () => console.log("Connected to MongoDB and Port 3000"));
  })
  .catch((err) => console.log(err));

//set view engine
app.set("view engine", "ejs");

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

//routes
app.use(authRoutes);
app.get("/", (req, res) => res.status(200).render("home"));
app.get("/smoothies", (req, res) => res.status(200).render("smoothies"));
