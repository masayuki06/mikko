const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

//routes

const postRoutes = require('./routes/post');


mongoose.connect(process.env.MONGO_URI,{ useUnifiedTopology: true,useNewUrlParser: true }).then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });

//middleware

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', postRoutes);



app.listen(3000, () => {
    console.log('Node is running');
});