const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

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

// Serve static assest if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))