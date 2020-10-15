const express = require('express')
const http = require('http')
module.exports = ({ config, router, logger }) => {
    const app = express()
    app.server = http.createServer(app)
    app.disable('x-powered-by')
    app.use(router)

    // we define our static folder
    app.use(express.static('public'))

    return {
        app,
        start: () =>
            new Promise(resolve => {
                const http = app.server.listen(config.port, () => {
                    const { port } = http.address()
                    logger.info(`🤘 API - Port ${port}`)
                })
                return resolve(app.server)
            })
    }
}
