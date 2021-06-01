const prod = require('../utils/products');

const pages = {
    home:(req, res) => {
        // res.send('home')
        let datos = {nombre:"adrian"}
        res.status(200).render('home', datos)
    },
    about:(req, res) => {
        res.status(200).send('about')
    },
    contact:(req, res) => {
        let datos = {nombre:"al formulario de contacto"}
        res.status(200).render('home', datos)
    },
    pictures:(req, res) => {
        // console.log(Number(req.params.id));
        // console.log(typeof Number(req.params.id));
        // console.log(req.params.tematica);
        if(!req.params.id){
            res.status(200).render('pictures')
        }
        else if (req.params.id && !req.params.tematica){
            console.log(req.params);
            /^\d+$/.test(req.params.id)?
                                        res.status(200).render('pictures',{
                                                                            id:req.params.id
                                                                            }):
                                        res.status(404).send(`ID incorrecto: ${req.params.id}`)
        }
        else {
            console.log(req.params);
            /^\d+$/.test(req.params.id)?
                                        res.status(200).render('pictures', {
                                            id:req.params.id, 
                                            tematica:req.params.tematica
                                            }):
                                        res.status(404).send('ID incorrecto')
        }
    },
    location:(req, res) => {
        console.log(req.query);
        res.status(200).send('location')
    },
    products:async(req, res) => {
        let id = req.query.id || "";
        let data = await prod.getProducts(`https://fakestoreapi.com/products/${id}`)
        console.log(data);
        res.status(200).render('product',{data})
    },
    addProduct:async(req, res) => {
        let data = await prod.createProduct('https://fakestoreapi.com/products/',req.body)
        console.log(data);
        res.status(200).send('enviado')
    },
}

module.exports = pages;