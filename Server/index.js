import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// environment variable from .dotenv
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const app = express();
const port = process.env.PORT || 5000;

// cors middlewares
app.use(cors());
app.use(express.json());

// get from atlas
const uri = process.env.DB;
// connection flags for new mongo db driver
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// ROUTES
const exercisesRouter = require('./routes/exercises');

// ROUTES USES
app.use('/', exercisesRouter);
// listen port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
