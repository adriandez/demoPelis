const prod = require('../utils/products');

const pages = {
    home:(req, res) => {
        // res.send('home')
        let title = req.query.titulo || "";
        console.log(title);
        res.status(200).render('home')
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