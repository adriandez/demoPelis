const filmData = require('../utils/filmData');
//const {apikey} = require("../config.js");
const apikey = process.env.apikey

const pages = {
    home:(req, res) => {
        res.status(200).render('home')
    },
    films:async(req, res) => {
        console.log(req.body.title);
        let data = await filmData.getfilm(`http://www.omdbapi.com/?t=${req.body.title}&apikey=${apikey}&`)
        console.log(data);
        res.status(200).render('film', {data})
    },
    searchFilm:async(req, res) => { //ALEJANDRO
        let data = await filmData.getfilm(`http://www.omdbapi.com/?t=${req.params.title}&apikey=${apikey}&`)
        console.log(data);
        res.status(200).render('film', {data})
    },
    postFilm:async(req, res) => {
        res.redirect(`/film/${req.body.title2}`)
    },
}

module.exports = pages;