// External Module
const express = require("express");
const userRouter = express.Router();

const homesController = require("../controllers/homes");

userRouter.get("/", homesController.getHomes);

module.exports = userRouter;
// registered home ko v destrucutr krlia kyuki hostrouter se multile obj arhethe na to jisko host chahey wo hist lo jisko registeredhomes chaheye wp registered homes lo
