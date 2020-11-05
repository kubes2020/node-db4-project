const express = require('express')
const helmet = require('helmet')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
    res.send('endpoint running!!!')
})

module.exports = server

// select *
// from recipies