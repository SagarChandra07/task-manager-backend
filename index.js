// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
// Routes
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
