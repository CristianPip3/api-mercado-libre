const { createContainer, asValue, asFunction } = require('awilix')
// you can do this
const app = require('./app')
const server = require('./interfaces/http/server')
const router = require('./interfaces/http/router')
const config = require('../config')
const logger = require('./infra/logging/logger')
const serviceMercadoLibre = require('./infra/serviceMercadoLibre')
const response = require('./infra/support/response')
const date = require('./infra/support/date')

const container = createContainer()

// SYSTEM
container.register({
    app: asFunction(app).singleton(),
    server: asFunction(server).singleton(),
    router: asFunction(router).singleton(),
    logger: asFunction(logger).singleton(),
    response: asFunction(response).singleton(),
    date: asFunction(date).singleton(),
    serviceMercadoLibre: asFunction(serviceMercadoLibre).singleton(),
    config: asValue(config)
})

module.exports = container
