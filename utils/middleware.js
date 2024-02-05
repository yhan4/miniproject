let currencies = [
    {
      id: 1,
      currencyCode: "CDN",
      country: "Canada",
      conversionRate: 1
    },
    {
      id: 2,
      currencyCode: "USD",
      country: "United States of America",
      conversionRate: 0.75
    }
]

const getCurrencies = (request, response) => {
    response.json(currencies)
}

const getCurrencyById = (request, response) => {
    // extract id from URL
  const id = request.params.id
  const curreny = currencies.find(c => c.id === parseInt(id))

  if (!curreny) {
    return response.status(404).json({error: 'resource not found' })
  }

  response.json(curreny)
}

const addCurrency = (request, response) => {
    // extract data sent in the request body
  const currencyCode = request.body
  const country = request.body
  const conversionRate = request.body

  if (!currencyCode||!country||!conversionRate ) {
    return response.status(400).json({ error: 'content missing' })
  }

  const EURcurrency = {
    id: currencies.length + 1,
    currencyCode: "EUR",
    country: "European Union",
    conversionRate: 0.69
  };

  currencies.push(EURcurrency)

  response.json(EURcurrency)
}

const updateCurrency = (request, response) => {
    // extract data from request parameters
  const id = request.params.id
  const newRate = request.params.newRate
  const currencyID = parseInt(id)
  const currencyUpdate = currencies.find(c => c.id === currencyID) 

  currencyUpdate.conversionRate = newRate
  response.json(currencyUpdate)
}

const deleteCurrency = (request, response) => {
    const id = parseInt(request.params.id)

  currencies = currencies.filter(currency => currency.id !== id)

  response.status(204).json()
}

module.exports = {
    getCurrencies, getCurrencyById, addCurrency, updateCurrency, deleteCurrency
}