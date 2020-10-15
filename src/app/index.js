/**
 * We want to start here so we can manage other infrastructure
 * database
 * memcache
 * express server
 */
module.exports = ({ server }) => {
    return {
        start: () =>
            Promise.resolve()
                .then(server.start)
    }
}
