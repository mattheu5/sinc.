const express = require('express')
const routes = express.Router()
const funcioController = require('./controllers/funcioController')
const sessionsController = require('./controllers/sessionController')

routes.post('/sessions', sessionsController.create)

routes.get('/funcionarios', funcioController.index)
routes.post('/funcionarios', funcioController.create)


module.exports = routes