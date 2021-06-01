const router = require('express').Router();
const pages = require('./pages')

router.get('/', pages.home)
router.get('/film', pages.products)
router.post('/film', pages.addProduct)
router.get('*', pages.home)

module.exports = router;