require('dotenv').config()
const express = require('express')  // We import the express application
const morgan = require('morgan')
const cors = require('cors') // Necessary for localhost
const app = express() // Creates an express application in app
const currencyRoutes = require('./routes/currencyRoutes')
const countryRoutes = require('./routes/countryRoutes')
const sequelize = require('./config/sequelize')

/**
 * Initial application setup
 * We need to use cors so we can connect to a localhost later
 * We need express.json so we can receive requests with JSON data attached
 */
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use('/api/currency', currencyRoutes)
app.use('/api/country', countryRoutes)


/**
 * TESTING Endpoint (Completed)
 * @receives a get request to the URL: http://localhost:3001/
 * @responds with the string 'Hello World!'
 */
app.get('/', (request, response) => {
  response.send('Hello World!')
})


/**
 * Add an unknown endpoint
 * This unknown endpoint should return a 404 status code 
 * with the response object { error: 'unknown endpoint }
 */
app.use((request, response) => {
  response.status(404).json({ error: 'unknown endpoint' })
})



const PORT = 3001

sequelize
  .sync()
  .then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  })
}).catch((error) => {
  console.error('error in syncing the database',error)
})