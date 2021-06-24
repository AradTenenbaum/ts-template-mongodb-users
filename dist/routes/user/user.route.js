"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const router = require("express").Router();
// Register
router.post('/register', user_controller_1.Register);
// Login
router.post('/login', user_controller_1.Login);
module.exports = router;
