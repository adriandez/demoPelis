const prod = require('../utils/products');

const pages = {
    home:(req, res) => {
        // res.send('home')
        let datos = {nombre:"adrian"}
        res.status(200).render('home', datos)
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