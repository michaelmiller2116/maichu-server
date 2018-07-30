const express = require('express')
const router = express.Router()

const queries = require('../queries/cart')

router.get('/cart', (request, response, next) => {
  queries.list().then(items => {
    response.json({ items })
  })
  .catch(next)
})

router.get('/cart/:id', (request, response, next) => {
  queries.read(request.params.id).then(item => {
    item
    ? response.json({ item })
    : response.status(404).json({ message: 'Not found' })
  })
  .catch(next)
})

router.post('/cart', (request, response, next) => {
  queries.create(request.body).then(item => {
    response.status(201).json({ item: item })
  })
  .catch(next)
})

router.delete('/cart/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.status(204).json({ deleted: true })
  })
  .catch(next)
})

router.put('/cart/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(item => {
    response.json({ item: item[0] })
  })
  .catch(next)
})

module.exports = router
