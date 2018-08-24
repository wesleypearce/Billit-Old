const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const BillSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    require: true
  },
  dueDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = Bill = mongoose.model('bill', BillSchema)