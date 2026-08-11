require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes=require('./routes')
const app = express()


app.use(cors({ origin: process.env.CLIENT_URL || '*' }))
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

app.use('/api',routes)

module.exports=app