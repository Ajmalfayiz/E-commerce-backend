
// using CommonJS (require) for DNS Setup
const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

require('dotenv').config()
const express = require('express')
const cors = require("cors")
const connectdb = require('./config/db')

const app = express()

const port = process.env.PORT || 5000

connectdb()

app.use(cors({ origin: process.env.CLIENT_URL || '*' }))
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

app.listen(port, () => {
    console.log(`server running on port: http://localhost:${port}/api/health`);
})
module.exports = app