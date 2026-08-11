const express = require('express');
const authRoutes=require('./authRoutes')
const productRoutes=require('./productRoutes')
const cartRoutes=require('./cartRoutes')
const orderRoutes=require('./orderRoutes')


const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/auth',authRoutes)
router.use('/products',productRoutes)
router.use('/cart',cartRoutes)
router.use('/order',orderRoutes)


module.exports = router;
