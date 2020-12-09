const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

dotenv.config();


// connect to DB
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () => {console.log("connected to DB")})
//import Routes
const authRoute = require('./routes/auth');

//middlewares
app.use(express.json());

//route middlewares
app.use('/api/user', authRoute);





app.listen(3000, ()=>{console.log("server listen to 3000")})