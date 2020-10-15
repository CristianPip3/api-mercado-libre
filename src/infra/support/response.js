const { assoc } = require('ramda')

module.exports = ({ config }) => {
  const defaultResponseTable = (_limit, _page, total) => {
    const limit = parseInt(_limit)
    const page = parseInt(_page)
    return {
      limit,
      total,
      page
    }
  }
  const defaultResponse = (success = true) => {
    return {
      success,
      version: config.version,
      date: new Date()
    }
  }

  const Success = data => {
    return data
  }
  const SuccessTable = (data, limit, page) => {
    return assoc(
      'docs',
      data.docs,
      defaultResponseTable(limit, page, data.total)
    )
  }

  const Fail = data => {
    return assoc('error', data, defaultResponse(false))
  }

  return {
    Success,
    SuccessTable,
    Fail
  }
}
