/**
 * function for getter user.
 */
const buildResponse   = require('src/infra/serviceMercadoLibre/buildResponse')
module.exports = ({ serviceMercadoLibre }) => {
  // code for getting all the items
  const all = (req, res) => {
    return Promise.resolve()
      .then(() =>{
        const query = req.query.q || ''
        const offset = req.query.offset? `&offset=${req.query.offset}`:''
        const limit = req.query.limit? `&limit=${req.query.limit}`:''
        const ruta = query+offset+limit
        const utilsResponse = buildResponse()
        return  serviceMercadoLibre.getItemsByQuery(ruta)
          .then(utilsResponse.buildResponseByQuery)

      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    all
  }
}
