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

router.get('/:id', (req, res) => {
    Recipies.getShoppingList(req.params.id)
    .then(shopList => {
        res.json(shopList)
    })
    .catch(err => {
        res.json({message: err.message })
    })
})

router.get('/:id/steps', (req, res) => {
    Recipies.getInstructions(req.params.id)
    .then(instructions => {
        res.json(instructions)
    })
    .catch(err => {
        res.json({message: err.message })
    })
})

module.exports = router