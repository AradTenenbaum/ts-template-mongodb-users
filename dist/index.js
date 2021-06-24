"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
const cors = require('cors');
// Routes import
const userRoute = require("./routes/user/user.route");
const exampleRoute = require("./routes/example/example.route");
// Config .env file
dotenv.config();
// Get port and db connection string
const PORT = parseInt(process.env.PORT, 10) || 5000;
const DB_CONNECTION = process.env.DB_CONNECTION.toString();
// Express application
const app = express_1.default();
// Middlewars
app.use(express_1.default.json());
app.use(cors());
// Routes
app.use('/user', userRoute);
app.use('/example', exampleRoute);
// Connect DB
mongoose_1.default.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB Connected');
    app.listen(PORT, () => {
        console.log('Server is running');
    });
});
