import express, {Application} from 'express';
import mongoose from 'mongoose';
import * as dotenv from "dotenv";
const cors = require('cors');

// Routes import
const userRoute = require("./routes/user/user.route");
const exampleRoute = require("./routes/example/example.route");


// Config .env file
dotenv.config();

// Get port and db connection string
const PORT: Number = parseInt(<string>process.env.PORT, 10) || 5000;
const DB_CONNECTION: string = (<string>process.env.DB_CONNECTION).toString();

// Express application
const app: Application = express();

// Middlewars
app.use(express.json());
app.use(cors());

// Routes
app.use('/user', userRoute);
app.use('/example', exampleRoute);

// Connect DB
mongoose.connect(DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('DB Connected');
        app.listen(PORT, () => {
            console.log('Server is running');
        });
    });

