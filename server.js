const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

require('dotenv').config()

const app = require('./app')
const connectdb = require('./config/db')
const PORT = process.env.PORT || 5000


connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`MiniCart running on ${PORT} [${process.env.NODE_ENV || 'developmet'}]`);
    })
})