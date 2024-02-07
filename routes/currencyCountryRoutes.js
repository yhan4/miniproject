const express = require('express')
const router = express.Router()
const Currency = require('../models/currency')
const Country = require('../models/country')

router.get('/', async (req, res) => {
    try {
        const currencyWithCountry = (await Currency.findAll({
            include: {
                model: Country,
                as:'country',
                attributes: ['name']
            },
            attributes:['currencyCode']
        })).map(({ currencyCode, country }) => ({
            currencyCode,
            countryName: country ? country.name : null
          }))
        res.json(currencyWithCountry)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router