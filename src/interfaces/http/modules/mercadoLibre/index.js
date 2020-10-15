const container = require('src/container')
const router = require('./router')
const instance = require('./instance')

module.exports = () => {
  const {
    logger,
    response: { Success, SuccessTable, Fail }
  } = container.cradle
  const app = instance()

  return {
    app,
    router: router({ logger, response: { Success, SuccessTable, Fail }, ...app })
  }
}
