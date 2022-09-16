const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

dotenv.config();
// app
const app = express();

// connect to database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DBConnection Successful!')
    }).catch(err => {
        console.log(err)
    })

// enable parsing of json data
app.use(express.json())

app.use('/api/auth', authRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log('Backend Server is running!');
})