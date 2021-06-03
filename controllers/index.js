const router = require('express').Router();
const pages = require('./pages')

router.get('/', pages.home)
router.get('/film', pages.films)
router.post('/postFilm',pages.postFilm)
router.get('/film/:title', pages.searchFilm)
router.post('/film', pages.films)



module.exports = router;