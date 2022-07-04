const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()

const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

connectDB()

const app = express()

const whitelist = [process.env.REACT_URL]                   //Whitelisting our React App
const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
  }
app.use(cors(corsOptions)) 

app.use(express.json())
app.use(express.urlencoded())

app.use('/', userRoutes)

app.listen(port, ()=>console.log(`Server started on port ${port}`))