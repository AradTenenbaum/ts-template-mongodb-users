import { addExample, getAllExamples, removeExample } from "./example.controller";
const verify = require("../../utilities/verifyToken");
const router = require("express").Router();

// Get Example route
router.get("/all", getAllExamples);
// Add Example route
router.post("/add", addExample);
// Remove Example route
router.delete("/remove/:exId",verify ,removeExample);

module.exports = router;
