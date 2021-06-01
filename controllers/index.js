const router = require('express').Router();
const pages = require('./pages')

router.get('/', pages.home)
router.get('/about', pages.about)
router.get('/contact/', pages.contact)
router.get('/pictures/:id?/:tematica?', pages.pictures)
router.get('/location', pages.location)
router.get('/products', pages.products)
router.post('/products', pages.addProduct)
router.get('*', pages.home)

module.exports = router;