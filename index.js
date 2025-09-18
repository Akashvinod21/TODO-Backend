const express = require('express');
require('dotenv').config();
require('./connection');

const authRoutes = require('./routes');
const taskRoutes = require('./routes');
const authMiddleware = require('./Middelware/authMiddleware');

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/tasks', authMiddleware, taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
