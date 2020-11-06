const express = require('express')
const Recipies = require('./recipies-model.js')
const db = require('../data/connection.js')

const router = express.Router()

router.get('/', (req, res) => {
    Recipies.getRecipe()
    .then(rec => {
        res.json(rec)
    })
    .catch(err => {
        res.json({message: err.message })
    })
})

module.exports = router