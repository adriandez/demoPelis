const express = require('express')
const router = require('./controllers/index')
const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Para acceder con API KEY: http://localhost:3000/products?id=4&API_KEY=123abcd
// http://localhost:3000/?API_KEY=123abcd

// const isAdmin = (req, res, next) => req.query.API_KEY == "123abcd"? next() : res.status(403).send(`Sorry but you are not admin and you do not have access to route ${req.url}`);

// app.use(isAdmin);

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})