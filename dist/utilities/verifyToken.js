"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    // Get token from header
    const token = req.header('auth-token');
    // If no token deny access
    if (!token)
        return res.status(401).send('Access Denied');
    try {
        // Trt to verify token
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.body.user = verified;
        next();
    }
    catch (err) {
        res.status(400).send('Invalid Token');
    }
};
