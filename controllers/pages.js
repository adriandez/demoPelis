const prod = require('../utils/products');
const {apikey} = require("../config.js");

const pages = {
    home:(req, res) => {
        res.status(200).render('home')
    },
    films:async(req, res) => {
        let data = await prod.getfilm(`http://www.omdbapi.com/?t=${req.query.t}&apikey=${apikey}&`)
        console.log(data);
        res.status(200).render('film', {data})
    },
}

module.exports = pages;