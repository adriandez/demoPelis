const router = require('express').Router();
const pages = require('./pages')

router.get('/', pages.home)
router.get('/film', pages.films)
router.get('*', pages.home)

module.exports = router;