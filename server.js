require('dotenv').config()

const app=require('./app')
const connectdb=require('./config/db')
const PORT=process.env.PORT || 5000

connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`MiniCart API running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`);
        
    })
})