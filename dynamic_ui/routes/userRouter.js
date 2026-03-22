// Core Modules
const path = require("path");

// External Module
const express = require("express");
const userRouter = express.Router();

// Local Module
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "airbnb Home",
  });
});

module.exports = userRouter;
// registered home ko v destrucutr krlia kyuki hostrouter se multile obj arhethe na to jisko host chahey wo hist lo jisko registeredhomes chaheye wp registered homes lo
