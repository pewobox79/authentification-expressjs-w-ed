const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
//import Routes
const authRoute = require('./routes/auth');
const results = dotenv.config();


// connect to DB
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true,  useNewUrlParser: true }, () => {console.log("connected to DB")})


//middlewares
app.use(express.json());

//route middlewares
app.use('/api/user', authRoute);





app.listen(3000, ()=>{console.log("server listen to 3000")})