const express = require('express');
const staffRoutes = require('./routes/staff');

const app = express();
app.use(express.json());
app.use('/api/staff', staffRoutes);

module.exports = app;
