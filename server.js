const express = require('express')
const helmet = require('helmet')
const RecipiesRouter = require('./recipies/recipies-router.js')
const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/recipies', RecipiesRouter)

server.get('/', (req, res) => {
    res.send('endpoint running!!!')
})

module.exports = server

