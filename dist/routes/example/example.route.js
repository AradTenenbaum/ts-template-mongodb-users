"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example_controller_1 = require("./example.controller");
const verify = require("../../utilities/verifyToken");
const router = require("express").Router();
// Get Example route
router.get("/all", example_controller_1.getAllExamples);
// Add Example route
router.post("/add", example_controller_1.addExample);
// Remove Example route
router.delete("/remove/:exId", verify, example_controller_1.removeExample);
module.exports = router;
