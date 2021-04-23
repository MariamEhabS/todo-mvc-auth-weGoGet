// Installing the dependencies
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/database')
const authRoutes = require('./routes/auth')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

// Function that connects to MongoDB
connectDB()

// Sets the view engine to our ejs
app.set('view engine', 'ejs')
// Allows access to public files
app.use(express.static('public'))
// MongoDB required magic
app.use(express.urlencoded({ extended: true }))
// This allows our JS to parse data from DB
app.use(express.json())

// ???
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

// Allows us to use authentication magicks
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
  
// These tell router to access depending on what is requested
app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)
 
//It indicates which Port to use, and if heroku assigns one, use it, if not use our port
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    