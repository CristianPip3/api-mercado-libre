const container = require('src/container') // we have to get the DI
const { get, getById, } = require('src/app/mercadoLibre')

module.exports = () => {
  const {
    serviceMercadoLibre
  } = container.cradle

  const getUseCase = get({ serviceMercadoLibre })
  const getByIdUseCase = getById({ serviceMercadoLibre })


  return {
    getUseCase,
    getByIdUseCase,
  }
}
