const t = require('tcomb')
const { compose } = require('ramda')
const { cleanData } = require('../helper')

const Item = t.struct({
  id: t.String,
  title: t.String,
  price: t.Object,
  picture: t.maybe(t.String),
  condition: t.String,
  free_shipping: t.Boolean,
  sold_quantity: t.maybe(t.Number),
  description: t.maybe(t.String)

})
module.exports = compose(cleanData, Item)
