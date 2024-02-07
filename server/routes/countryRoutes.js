const express = require('express')
const router = express.Router()
const Country = require('../models/country')

router.get('/', async (req, res) => {
    try {
        const countries = await Country.findAll()
        res.json(countries)
    } catch (error) {
        console.error(error)
    }
})

router.post ('/', async (req, res) => {
    try {
        const newCountry = await Country.create(req.body)
        res.json(newCountry)
    } catch (error) {
        console.error(error)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const country = await Country.findByPk(id)
        await country.destroy()
        res.status(204).json()
      } catch (error) {
        console.error(error)
      }  
})

module.exports = router