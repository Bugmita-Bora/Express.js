// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Module
const homesController = require("../controllers/homes");

hostRouter.get("/add-home", homesController.getAddHome);

hostRouter.post("/add-home", homesController.postAddHome);

exports.hostRouter = hostRouter;

// Browser hits POST /add-home  ← URL is defined ✅
//         ↓
// Server responds with homeAdded.html ← just the response
//         ↓
// Browser shows homeAdded.html
//         ↓
// URL still stays /add-home in browser! 👈
