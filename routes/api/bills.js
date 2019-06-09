const express = require('express')
const router = express.Router()

// Bill Model

const Bill = require('../../models/Bill')

// @route   GET api/bills
// @desc    Get all bills
// @access  Public
router.get('/', (req, res) => {
  Bill.find()
    .sort({ dueDate: 1 })
    .then(bills => res.json(bills))
})

// @route   DELETE api/bills/:id
// @desc    Deletes a bill
// @access  Public
router.delete('/:id', (req, res) => {
  Bill.findById(req.params.id)
    .then(bill => bill.remove().then(() => res.json({ success: true })))
})

// @route   POST api/bills
// @desc    Posts a bill
// @access  Public
router.post('/', (req, res) => {
  const newBill = new Bill({
    name: req.body.name,
    cost: req.body.cost,
    dueDate: req.body.dueDate
  })
  
  newBill.save().then(bill => res.json(bill))
})

// @route   GET api/bills/:weekFilter
// desc     Gets bills within a specific time frame
// access   PUBLIC
router.get('/:weekFilter', (req, res) => {
  const weekOffsetInMs = 604800000
  const startDate = Date.now()
  const endDate = startDate + weekOffsetInMs * req.params.weekFilter

  if (req.params.weekFilter == '0') {
    Bill.find()
    .sort({ dueDate: 1 })
    .then(bills => res.json(bills))
  } else {
    Bill.find()
    .where('dueDate').gt(startDate).lt(endDate)
    .sort({ dueDate: 1 })
    .then(bills => res.json(bills))
  }
})

// @route   EDIT api/bills ????
// @desc    Edits a bill
// @access  Public
router.put('/:id', (req, res) => {
  // Bill.findById(req.params._id)
  //   .then(bill => bill.update({
  //     name: req.body.name,
  //     cost: req.body.cost,
  //     dueDate: req.body.dueDate
  //   }).then((bill) => res.json(bill)))

  var id = req.params._id
  var bill = req.body
  Bill.findOneAndUpdate(id, bill, {new: true}, function(err) {
    if(err) {
      throw err
    }
  }).then((newBill) => {
    res.json(newBill)
  })

  // Bill.findOne({_id: req.params.id}, function(err, foundObject) {
  //   if(err) {
  //     console.log(err)
  //     res.status(500).send()
  //   } else {
  //     if(!foundObject) {
  //       res.status(404).send
  //     } else {
  //       updatedObject = req.body
  //       console.log(updatedObject)
  //       foundObject.save(function(err, updatedObject) {
  //         if(err) {
  //           console.log(err)
  //           res.status(500).send()
  //         } else {
  //           res.json(updatedObject)
  //         }
  //       })
  //     }
  //   }
  // })
})

module.exports = router