const express = require('express')
const routes = express.Router()

const PersonController = require('./controllers/PersonController')

routes.get('/person/:id', PersonController.show)
routes.get('/people', PersonController.index)
routes.post('/person', PersonController.store)
routes.put('/person/:id', PersonController.update)
routes.delete('/person/:id', PersonController.destroy)

module.exports = routes