const filmData = require('../utils/filmData');
//const {apikey} = require("../config.js");
const apikey = process.env.apikey

const film = {
    getFilmD: 
        async(req, res) => {
        let data = await filmData.getfilm(`http://www.omdbapi.com/?t=${req.params.title}&apikey=${apikey}&`)
        console.log(data);
        res.status(200).json(data)
    },
    addFilmD: 
        async(req, res) => {
            res.status(200).json({message: `Se ha guardado: ${req.body.Title}`})
    },

    changeFilmD: (req, res) =>{
        console.log(req.body);
        res.status(200).json({id:0, message: `Se ha actualizado: ${req.body.Title}`})

    },
    deleteFilmD: (req, res) =>{
        res.status(200).json({id:0, message: `Se ha borrado: ${req.body.Title}`})
    },
}


module.exports = film;