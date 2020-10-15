const fetch = require('node-fetch')


module.exports = ({ config }) => {
  const URL_BASE = config.apiMercadoLibre
  const optionsRequest = {
    method: "GET",
    redirect: "follow"
  }
  const getItemsByQuery =  async (query) => (
    await fetch(`${URL_BASE}sites/MLA/search?q=:${query}`,optionsRequest).then((res) => res.json())
      .catch(error => {
       throw new Error(error)
    })
  )
  const getItemsById =  async (id) => {
    const item = await fetch(`${URL_BASE}items/${id}`,optionsRequest)
      .then((res) => res.json())
      .catch(error => {
        throw new Error(error)
      })
    const description = await fetch(`${URL_BASE}items/${id}/description`,optionsRequest)
      .then((res) => res.json())
      .catch(error => {
        throw new Error(error)
      })
    return {
      result: item,
      description
    }

  }


  return {
    getItemsByQuery,
    getItemsById
  }
}
