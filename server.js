const express = require('express')  // We import the express application
const cors = require('cors') // Necessary for localhost
const app = express() // Creates an express application in app

/**
 * Initial application setup
 * We need to use cors so we can connect to a localhost later
 * We need express.json so we can receive requests with JSON data attached
 */
app.use(cors())
app.use(express.json())


/**
 * DATA STORAGE
 * We're using a local variable 'currencies' to store our data: a list of currency objects
 * Each object represents a 'currency', and contains the following fields
 * id: a number, 
 * currencyCode: a string, three letters (see https://www.iban.com/currency-codes as reference)
 * country: a string, the name of the country
 * conversionRate: the amount, in that currency, required to equal 1 Canadian dollar
 */
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

/**
 * TESTING Endpoint (Completed)
 * @receives a get request to the URL: http://localhost:3001/
 * @responds with the string 'Hello World!'
 */
app.get('/', (request, response) => {
  response.send('Hello World!')
})




/**
 * TODO: GET Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/
 * @responds with returning the data as a JSON
 */
app.get('/api/currency/', (request, response) => {
  response.json(currencies)
})




/**
 * TODO: GET:id Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/:id
 * @responds with returning specific data as a JSON
 */
app.get('/api/currency/:id', (request, response) => {
  // extract id from URL
  const id = request.params.id
  const curreny = currencies.find(c => c.id === parseInt(id))

  if (!curreny) {
    return response.status(404).json({error: 'resource not found' })
  }

  response.json(curreny)
})




/**
 * TODO: POST Endpoint
 * @receives a post request to the URL: http://localhost:3001/api/currency,
 * with data object enclosed
 * @responds by returning the newly created resource
 */
app.post('/api/currency', (request, response) => {
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

  currencies.push(EURcurrency);

  response.json(EURcurrency);
});




/**
 * TODO: PUT:id endpoint
 * @receives a put request to the URL: http://localhost:3001/api/currency/:id/:newRate
 * with data object enclosed
 * Hint: updates the currency with the new conversion rate
 * @responds by returning the newly updated resource
 */
app.put('/api/currency/:id/:newRate', (request, response) => {
  // extract data from request parameters
  const id = request.params.id
  const newRate = request.params.newRate
  const currencyID = parseInt(id)
  const currencyUpdate = currencies.find(c => c.id === currencyID) 

  currencyUpdate.conversionRate = newRate
  response.json(currencyUpdate)

})



/**
 * TODO: DELETE:id Endpoint
 * @receives a delete request to the URL: http://localhost:3001/api/currency/:id,
 * @responds by returning a status code of 204
 */
app.delete('/api/currency/:id', (request, response) => {
  const id = parseInt(request.params.id);

  currencies = currencies.filter(currency => currency.id !== id);

  response.status(204).json();
})



/**
 * Add an unknown endpoint
 * This unknown endpoint should return a 404 status code 
 * with the response object { error: 'unknown endpoint }
 */
app.use((request, response) => {
  response.status(404).json({ error: 'unknown endpoint' });
});



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})