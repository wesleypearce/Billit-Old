const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const bills = require('./routes/api/bills')

const app = express()

// Bodyparser middleware
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to Mongo
mongoose.connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

// Use routes
app.use('/api/bills', bills)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))