// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./Routes/UserRouts');
const propertyRoutes = require('./Routes/PropertyRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;



app.use('/api/user', userRoutes);
app.use('/api/properties', propertyRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
