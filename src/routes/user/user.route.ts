import { Login, Register } from './user.controller';
const router = require("express").Router();

// Register
router.post('/register', Register);
// Login
router.post('/login', Login);

module.exports = router;
