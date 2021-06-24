const jwt = require('jsonwebtoken');
import {Request, Response, NextFunction} from 'express';

module.exports = function(req: Request, res: Response, next: NextFunction) {
    // Get token from header
    const token: (string | undefined) = req.header('auth-token');
    // If no token deny access
    if(!token) return res.status(401).send('Access Denied');

    try {
        // Trt to verify token
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.body.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}

