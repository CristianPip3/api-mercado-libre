/**
 * function for getter country user.
 */
const buildResponse   = require('src/infra/serviceMercadoLibre/buildResponse')
module.exports = ({ serviceMercadoLibre }) => {
  // code for getting a item by id
  const getById = ({ id }) => {
    return Promise.resolve()
      .then(() =>{
        if(!id) throw new Error('Id of item is required')
        const utilsResponse = buildResponse()
        return serviceMercadoLibre.getItemsById(id).then(utilsResponse.buildResponseById)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    getById
  }
}
