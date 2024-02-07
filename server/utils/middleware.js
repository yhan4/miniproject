// let currencies = [
//     {
//       id: 1,
//       currencyCode: "CDN",
//       country: "Canada",
//       conversionRate: 1
//     },
//     {
//       id: 2,
//       currencyCode: "USD",
//       country: "United States of America",
//       conversionRate: 0.75
//     }
// ]
const Currency = require('../models/currency')

const getCurrencies = async(request, response) => {
  try {
    const currencies = await Currency.findAll()
    response.json(currencies)
  } catch (error) {
    console.error(error)
  }
}

const getCurrencyById = async(request, response) => {
  // extract id from URL
  const id = request.params.id
  try {
    const curreny = await Currency.findByPk(id)
    if (!curreny) {
     return response.status(404).json({error: 'resource not found' })
    }
    response.json(curreny)
  } catch (error) {
    console.error(error)
  }
  
}

const addCurrency = async (request, response) => {
    // extract data sent in the request body
  const currencyCode = request.body.currencyCode
  const countryID = request.body.countryID
  const conversionRate = request.body.conversionRate

  try {
    const newCurrency = await Currency.create({
      currencyCode,
      countryID, 
      conversionRate,
    })
    if (!currencyCode||!countryID||!conversionRate ) {
      return response.status(400).json({ error: 'content missing' })
    }
    response.json(newCurrency)
  } catch (error) {
    console.error(error)
    response.status(500).json({ error: 'Internal server error' })
  }
}

const updateCurrency = async (request, response) => {
  const id = request.params.id
  const newRate = request.params.newRate
  
  try {
    const currency = await Currency.findByPk(id) 
    currency.conversionRate = newRate
    await currency.save()
    response.json(currency)
  } catch (error) {
    console.error(error)
  }
}

const deleteCurrency = async (request, response) => {
  const id = parseInt(request.params.id)

  try {
    const currency = await Currency.findByPk(id)
    await currency.destroy()
    response.status(204).json()
  } catch (error) {
    console.error(error)
  }  
}

module.exports = {
    getCurrencies, getCurrencyById, addCurrency, updateCurrency, deleteCurrency
}