const express = require('express')
const router = express.Router()
const { getCurrencies, getCurrencyById, addCurrency, updateCurrency, deleteCurrency } = require('../utils/middleware');

router.get('/', getCurrencies)
router.get('/:id', getCurrencyById)
router.post('/', addCurrency)
router.put('/:id/:newRate', updateCurrency)
router.delete('/:id', deleteCurrency)

module.exports = router