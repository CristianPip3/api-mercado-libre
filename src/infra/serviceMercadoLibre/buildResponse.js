const { filter, innerJoin } = require('ramda')
const { toEntity } = require('./transform')
module.exports = () => {
  const findCategory = item => item.id === 'category'
  const mergeCategory = (item, idCategory) => item.id === idCategory
  const formatObject = (item, typeFilter ) => {
    const { shipping, currency_id, price } = item
    const priceObj = Object.assign({},{
      currency: currency_id,
      decimals: price
    })
    if(typeFilter){
      const { installments } = item
      priceObj.amount = installments.amount
      delete item.sold_quantity
    }

    const free_shipping = shipping.free_shipping
    const entity = Object.assign({}, item,{
      price: priceObj,
      free_shipping
    })

    return toEntity(entity)
  }
  const getCategories = (available_filters, categoriesId) => {
    const filterCategories = filter(findCategory, available_filters)
    return innerJoin(mergeCategory, filterCategories[0].values, categoriesId)
  }
  const buildResponseByQuery = (data) => {
    const { results, available_filters } = data
    const items = results.map(item => formatObject(item, true))
    const categoriesId = results.map(item => item.category_id)
    const categories = getCategories(available_filters, categoriesId)
    const response = Object.assign({}, {
      categories,
      items
    })
    return response
  }
  const buildResponseById = (data) => {
    const { result, description } = data
    const entity =  formatObject(result, false)
    const item = Object.assign({}, entity, {
      description: description.plain_text
    })
    const categoriesId = result.category_id
    const response = Object.assign({}, {
      categories : categoriesId ,
      item
    })
    return response
  }
  return {
    buildResponseByQuery,
    buildResponseById
  }

}
