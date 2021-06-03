const router = require('express').Router();
const film = require('./film')

//
router.get('/film/:title',film.getFilmD)
router.post('/film',film.addFilmD)
router.put('/film',film.changeFilmD)
router.delete('/film',film.deleteFilmD)
module.exports = router;