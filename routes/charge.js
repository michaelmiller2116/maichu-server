const express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_4zMzmNANfkvvgXumEhcUksHS')

router.use(require('body-parser').text())

router.post('/charge', async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    })
    res.json({ status })
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
})

module.exports = router
