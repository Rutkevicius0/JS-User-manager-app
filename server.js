require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');

const mongoose = require('mongoose');

//Middleware
app.use(cors());
app.use(express.json());

const mainRoutes = require('./server/utilities/mainroutes');
app.use('/', mainRoutes);

const PORT = process.env.PORT;

connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, console.log(`Server online and running on port ${PORT}`));
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Failed to connect to MongoDB', error);
  }
};

connectDB();
